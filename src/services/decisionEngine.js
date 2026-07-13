import { generateDecisionAnalysis } from "./aiService.js";

export async function analyzeDecision(question) {
  try {
    const rawResponse = await generateDecisionAnalysis(question);

    const cleaned = rawResponse
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const result = JSON.parse(cleaned);

    return result;

  } catch (error) {
    console.error("Decision Engine Error:", error);

    throw error;
  }
}