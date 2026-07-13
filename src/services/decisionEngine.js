import { generateDecisionAnalysis } from "./aiService.js";
import { saveDecision } from "../database/storage.js";

export async function analyzeDecision(question) {
  try {
    const rawResponse = await generateDecisionAnalysis(question);

    const cleaned = rawResponse
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const result = JSON.parse(cleaned);

    result.pros = Array.isArray(result.pros)
      ? result.pros
      : result.pros
      ? [String(result.pros)]
      : [];

    result.cons = Array.isArray(result.cons)
      ? result.cons
      : result.cons
      ? [String(result.cons)]
      : [];

    result.risks = Array.isArray(result.risks)
      ? result.risks
      : result.risks
      ? [String(result.risks)]
      : [];

    result.nextSteps = Array.isArray(result.nextSteps)
      ? result.nextSteps
      : result.nextSteps
      ? [String(result.nextSteps)]
      : [];

    result.confidence = Number(result.confidence) || 0;

    result.recommendation =
      result.recommendation || "No recommendation available.";

    result.cost = result.cost || "Unknown";

    result.timeline = result.timeline || "Unknown";

    await saveDecision({
      question,
      recommendation: result.recommendation,
      confidence: result.confidence,
      cost: result.cost,
      timeline: result.timeline,
      pros: result.pros,
      cons: result.cons,
      risks: result.risks,
      nextSteps: result.nextSteps,
    });

    return result;
  } catch (error) {
    console.error("Decision Engine Error:", error);
    throw error;
  }
}