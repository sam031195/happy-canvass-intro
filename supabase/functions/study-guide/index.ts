import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { courseName, moduleTitle, moduleNumber, moduleTopics, program, university, model } = await req.json();

    const selectedModel = model || "google/gemini-2.5-flash-lite";

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompt = `You are an expert academic research assistant and self-study coach. For the given university module, produce a comprehensive self-study resource guide in clean GitHub-flavored Markdown.

OUTPUT STRUCTURE (follow exactly):

## Module [NUMBER]: [TITLE]

2-3 sentence overview of what this module covers and why it matters.

---

### 1. Top GitHub Repositories

| Repository | Stars | Description | Difficulty |
| :--- | :--- | :--- | :--- |
[3-5 real, actively maintained repos with 50+ stars, clickable URLs]

---

### 2. Practice Questions & Interview Prep

| Repository | Stars | Description | Difficulty |
| :--- | :--- | :--- | :--- |
[2-3 repos with practice problems/exercises with answers]

---

### 3. Best Video Lectures / YouTube Playlists

| Title | URL | Creator | Description | Difficulty |
| :--- | :--- | :--- | :--- | :--- |
[2-3 videos — prefer Stanford, MIT, CMU, 3Blue1Brown, StatQuest, Andrew Ng]

---

### 4. Best Online Courses

| Course | Platform | Description | Cost | Difficulty |
| :--- | :--- | :--- | :--- | :--- |
[2-3 courses from Coursera, edX, fast.ai, Google — rated 4.5+/5]

---

### 5. Key Research Papers

| Title | Authors | Year | Link | Description |
| :--- | :--- | :--- | :--- | :--- |
[2-3 seminal papers with clickable arXiv or DOI links]

---

### 6. Suggested Hands-On Project

**What to build:** [description]
**Tools/Libraries:** [list]
**Dataset:** [name + free link]
**Expected Learning Outcome:** [2-3 sentences]

---

### 7. Recommended Study Order

[3-5 sentence paragraph guiding the learner through the resources]

---

Rules:
- Every resource must have a clickable URL
- Add [Beginner], [Intermediate], or [Advanced] tag to every resource
- All resources must be real and directly relevant — no filler
- Write in professional, academic tone`;

    const userMessage = `Generate the complete self-study resource guide for:

**University:** ${university || "University of Washington"}
**Program:** ${program || "Master of Science in Information Systems (MSIS)"}
**Course:** ${courseName}
**Module Number:** ${moduleNumber}
**Module Title:** ${moduleTitle}
**Module Topics:** ${Array.isArray(moduleTopics) ? moduleTopics.join(", ") : moduleTopics}

Produce the full guide now. Every resource must be real, clickable, and directly relevant.`;

    const callGateway = async (attempt: number): Promise<Response> => {
      const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: selectedModel,
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userMessage },
          ],
          stream: true,
        }),
      });

      // Retry once on 5xx errors
      if (response.status >= 500 && attempt < 1) {
        console.warn(`Gateway returned ${response.status}, retrying (attempt ${attempt + 1})...`);
        return callGateway(attempt + 1);
      }

      return response;
    };

    const response = await callGateway(0);

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Usage limit reached. Please add credits to continue." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errText = await response.text();
      console.error("AI gateway error:", response.status, errText);
      return new Response(
        JSON.stringify({ error: "AI service temporarily unavailable. Please try again." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("study-guide error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
