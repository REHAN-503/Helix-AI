import { getRecentDecisions } from "../database/storage.js";

export async function historyCommand({ say }) {
  const decisions = await getRecentDecisions();

  if (decisions.length === 0) {
    return await say("📚 No decision history found.");
  }

  const blocks = [
    {
      type: "header",
      text: {
        type: "plain_text",
        text: "📚 HELIX HISTORY",
      },
    },
    {
      type: "divider",
    },
  ];

  decisions.forEach((decision, index) => {
    blocks.push(
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text:
            `*${index + 1}. ${decision.question}*\n\n` +
            `⭐ *Confidence:* ${decision.confidence}%\n` +
            `💰 *Cost:* ${decision.cost}\n` +
            `🕒 ${new Date(decision.timestamp).toLocaleString()}`
        }
      },
      {
        type: "divider"
      }
    );
  });

  await say({
    text: "Helix Decision History",
    blocks,
  });
}   