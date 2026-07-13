export function buildDecisionCard(result) {
  return [
    {
      type: "header",
      text: {
        type: "plain_text",
        text: "🧠 HELIX AI",
      },
    },

    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*Decision Intelligence Report*",
      },
    },

    {
      type: "divider",
    },

    {
      type: "section",
      text: {
        type: "mrkdwn",
        text:
          `*✅ Recommendation*\n${result.recommendation}\n\n` +
          `*⭐ Confidence:* ${result.confidence}%\n` +
          `*💰 Cost:* ${result.cost}\n` +
          `*⏳ Timeline:* ${result.timeline}`,
      },
    },

    {
      type: "divider",
    },

    {
      type: "section",
      text: {
        type: "mrkdwn",
        text:
          "*👍 Pros*\n• " +
          result.pros.join("\n• "),
      },
    },

    {
      type: "section",
      text: {
        type: "mrkdwn",
        text:
          "*⚠ Risks*\n• " +
          result.risks.join("\n• "),
      },
    },

    {
      type: "section",
      text: {
        type: "mrkdwn",
        text:
          "*➡ Next Steps*\n• " +
          result.nextSteps.join("\n• "),
      },
    },
  ];
}