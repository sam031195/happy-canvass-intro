import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

/* ── Model routing map ── */
const MODEL_MAP: Record<string, string> = {
  "gpt-5.2": "openai/gpt-5.2",
  "gpt-5.3-codex": "openai/gpt-5",
  "opus-4.6": "openai/gpt-5",
  "sonnet-4.6": "openai/gpt-5-mini",
  "gemini-3-pro": "google/gemini-3-pro-preview",
};

/* ── Task classification keywords for auto-routing ── */
const TASK_PATTERNS: { pattern: RegExp; modelId: string }[] = [
  { pattern: /\b(code|coding|implement|function|algorithm|debug|script|api|sql|python|javascript|typescript|react|html|css)\b/i, modelId: "openai/gpt-5" },
  { pattern: /\b(reason|analyze|compare|evaluate|prove|theorem|logic|math|calculate|derive)\b/i, modelId: "openai/gpt-5.2" },
  { pattern: /\b(essay|write|draft|article|report|summarize|summary|outline|blog|long.?form)\b/i, modelId: "openai/gpt-5" },
  { pattern: /\b(image|picture|photo|visual|diagram|chart|draw|vision|see|look at)\b/i, modelId: "google/gemini-3-pro-preview" },
];

const DEFAULT_GATEWAY_MODEL = "google/gemini-3-flash-preview";

function classifyAndRoute(userMessage: string, selectedModelId?: string): string {
  // If user explicitly selected a model, use its mapped gateway ID
  if (selectedModelId && MODEL_MAP[selectedModelId]) {
    return MODEL_MAP[selectedModelId];
  }

  // Auto-classify based on the latest user message
  for (const { pattern, modelId } of TASK_PATTERNS) {
    if (pattern.test(userMessage)) {
      return modelId;
    }
  }

  return DEFAULT_GATEWAY_MODEL;
}

/* ── System prompt ── */
function buildSystemPrompt(courseContext?: string, moduleContext?: string): string {
  let prompt = `You are an expert academic AI assistant built for a university study platform. You help students learn, understand concepts, write code, and prepare for exams.

REASONING STYLE:
- For conceptual questions: explain step-by-step with clear structure
- For coding questions: provide correct, production-ready code with explanations
- For analytical questions: show reasoning chain clearly
- For comparisons: use structured tables or bullet points
- Always be precise, cite concepts accurately, and use academic language when appropriate
- Format responses in clean Markdown with headers, lists, and code blocks as appropriate`;

  if (courseContext) {
    prompt += `\n\nCOURSE CONTEXT: The student is studying "${courseContext}".`;
  }
  if (moduleContext) {
    prompt += ` They are currently focused on the module: "${moduleContext}".`;
  }

  prompt += `\n\nIMPORTANT: Use the course and module context to give targeted, relevant answers. If the student asks about topics related to their course, connect your answer to their curriculum.`;

  return prompt;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      messages,
      modelId,
      courseContext,
      moduleContext,
    } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: "Messages array is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    // Step 1-3: Analyze intent, classify task, select model
    const latestUserMessage = messages.filter((m: { role: string }) => m.role === "user").pop()?.content || "";
    const gatewayModel = classifyAndRoute(latestUserMessage, modelId);

    // Step 4: Build messages with system prompt and full conversation history
    const systemPrompt = buildSystemPrompt(courseContext, moduleContext);
    const fullMessages = [
      { role: "system", content: systemPrompt },
      ...messages,
    ];

    console.log(`Routing to model: ${gatewayModel} | Messages: ${messages.length} | ModelId: ${modelId || "auto"}`);

    // Step 5-6: Generate response with streaming
    const callGateway = async (model: string, attempt: number): Promise<Response> => {
      const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model,
          messages: fullMessages,
          stream: true,
        }),
      });

      // Retry once on 5xx
      if (response.status >= 500 && attempt < 1) {
        console.warn(`Gateway ${response.status}, retrying (attempt ${attempt + 1})...`);
        return callGateway(model, attempt + 1);
      }

      // Fallback to default model if selected model fails
      if (!response.ok && model !== DEFAULT_GATEWAY_MODEL && attempt >= 1) {
        console.warn(`Model ${model} failed, falling back to ${DEFAULT_GATEWAY_MODEL}`);
        return callGateway(DEFAULT_GATEWAY_MODEL, 0);
      }

      return response;
    };

    const response = await callGateway(gatewayModel, 0);

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

    // Stream the response back
    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
