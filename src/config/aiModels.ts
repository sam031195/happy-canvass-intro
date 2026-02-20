/**
 * AI Model Configuration
 *
 * Central registry for all available AI models.
 * To add a new model, simply add an entry to AI_MODELS below.
 * The `gatewayId` is the identifier sent to the Lovable AI Gateway.
 */

export interface AIModel {
  /** Unique key used in state and API calls */
  id: string;
  /** Display name shown in the UI */
  label: string;
  /** Category / use-case grouping */
  category: string;
  /** The model identifier sent to the AI gateway */
  gatewayId: string;
}

export const AI_MODELS: AIModel[] = [
  {
    id: "gpt-5.2",
    label: "GPT 5.2",
    category: "General Reasoning",
    gatewayId: "openai/gpt-5.2",
  },
  {
    id: "gpt-5.3-codex",
    label: "GPT 5.3 Codex",
    category: "Advanced Coding and Agentic Workflows",
    gatewayId: "openai/gpt-5",
  },
  {
    id: "opus-4.6",
    label: "Opus 4.6",
    category: "Long Form Writing and Structured Content",
    gatewayId: "openai/gpt-5",
  },
  {
    id: "sonnet-4.6",
    label: "Sonnet 4.6",
    category: "Fast Lightweight Responses",
    gatewayId: "openai/gpt-5-mini",
  },
  {
    id: "gemini-3-pro",
    label: "Gemini 3 Pro",
    category: "Multimodal or Vision Tasks",
    gatewayId: "google/gemini-3-pro-preview",
  },
];

/** The model used when none is explicitly selected */
export const DEFAULT_MODEL_ID = "gpt-5.3-codex";

export const getModelById = (id: string): AIModel =>
  AI_MODELS.find((m) => m.id === id) ?? AI_MODELS.find((m) => m.id === DEFAULT_MODEL_ID)!;

export const getDefaultModel = (): AIModel => getModelById(DEFAULT_MODEL_ID);

/**
 * Group models by category for rendering in the dropdown.
 * Preserves insertion order.
 */
export const getModelsByCategory = (): { category: string; models: AIModel[] }[] => {
  const map = new Map<string, AIModel[]>();
  for (const m of AI_MODELS) {
    if (!map.has(m.category)) map.set(m.category, []);
    map.get(m.category)!.push(m);
  }
  return Array.from(map.entries()).map(([category, models]) => ({ category, models }));
};
