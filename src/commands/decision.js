import { analyzeDecision } from "../services/decisionEngine.js";
import { buildDecisionCard } from "../utils/blockBuilder.js";

export async function decisionCommand({ message, say }) {
  const result = await analyzeDecision(message.text);

  const blocks = buildDecisionCard(result);

  await say({
    text: `Helix AI Decision Analysis: ${result.recommendation}`,
    blocks,
  });
}