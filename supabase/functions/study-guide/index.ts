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
    const { courseName, moduleTitle, moduleNumber, moduleTopics, program, university } = await req.json();

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompt = `You are an expert academic research assistant, curriculum designer, and self-study coach. Your task is to create the most comprehensive, actionable, and high-quality self-study resource guide for a SINGLE MODULE of a university-level course.

This guide must enable a motivated self-learner — with NO access to the university, NO professor, and NO classmates — to fully master every topic in this module from home.

FORMAT REQUIREMENTS:
- Use clean GitHub-flavored Markdown with tables for every resource category
- Every resource MUST include a clickable URL wherever possible
- Add a difficulty tag to every resource: [Beginner], [Intermediate], or [Advanced]
- Write in a professional, academic tone with full descriptive sentences
- Every single resource must be high-signal and directly relevant — no filler
- Do NOT include a core book list — focus only on module-specific resources

OUTPUT STRUCTURE (follow this EXACTLY for the single module):

## Module [NUMBER]: [TITLE]

Brief 2-3 sentence overview of what this module covers and why it matters.

---

### 1. Top GitHub Repositories

| Repository | Stars | Description | Difficulty |
| :--- | :--- | :--- | :--- |
[3-5 repos — real, actively maintained, 50+ stars]

---

### 2. Practice Questions & Interview Prep Repos

| Repository | Stars | Description | Difficulty |
| :--- | :--- | :--- | :--- |
[2-3 repos with practice problems/exercises with answers]

---

### 3. Best Video Lectures / YouTube Playlists

| Title | URL | Creator / University | Description | Difficulty |
| :--- | :--- | :--- | :--- | :--- |
[2-3 videos — prefer Stanford, MIT, CMU, 3Blue1Brown, StatQuest, Karpathy, Andrew Ng]

---

### 4. Best Online Courses

| Course | Platform | Description | Cost | Difficulty |
| :--- | :--- | :--- | :--- | :--- |
[2-3 courses from Coursera, edX, fast.ai, Google — rated 4.5+/5]

---

### 5. Key Research Papers

| Title | Authors | Year | Link | Description |
| :--- | :--- | :--- | :--- | :--- |
[2-3 seminal/foundational papers with clickable arXiv or DOI links]

---

### 6. Suggested Hands-On Project

**What to build:** [description]
**Tools/Libraries:** [list]
**Dataset:** [name + free link if available]
**Expected Learning Outcome:** [2-3 sentences]

---

### 7. Recommended Study Order

[3-5 sentence paragraph: Start with X, then Y, then practice with Z, finally build the project]`;

    const userMessage = `Generate the complete self-study resource guide for the following module:

**University:** ${university || "University of Washington"}
**Program:** ${program || "Master of Science in Information Systems (MSIS)"}
**Course:** ${courseName}
**Module Number:** ${moduleNumber}
**Module Title:** ${moduleTitle}
**Module Topics:** ${Array.isArray(moduleTopics) ? moduleTopics.join(", ") : moduleTopics}

Produce the full guide now. Every resource must be real, clickable, and directly relevant to the module topic. Quality over speed.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userMessage },
        ],
        stream: true,
      }),
    });

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
        JSON.stringify({ error: "AI gateway error" }),
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
