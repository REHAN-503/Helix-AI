function formatList(value) {
  if (Array.isArray(value)) {
    return value.length ? "• " + value.join("\n• ") : "• None";
  }

  if (typeof value === "string") {
    return `• ${value}`;
  }

  return "• None";
}

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
          `*✅ Recommendation*\n${result.recommendation || "No recommendation available"}\n\n` +
          `*⭐ Confidence:* ${result.confidence ?? "N/A"}%\n` +
          `*💰 Cost:* ${result.cost || "N/A"}\n` +
          `*⏳ Timeline:* ${result.timeline || "N/A"}`,
      },
    },

    {
      type: "divider",
    },

    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*👍 Pros*\n${formatList(result.pros)}`,
      },
    },

    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*👎 Cons*\n${formatList(result.cons)}`,
      },
    },

    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*⚠ Risks*\n${formatList(result.risks)}`,
      },
    },

    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*➡ Next Steps*\n${formatList(result.nextSteps)}`,
      },
    },
  ];
}