import dotenv from "dotenv";
import { App } from "@slack/bolt";

import { helloCommand } from "./commands/hello.js";
import { helpCommand } from "./commands/help.js";
import { decisionCommand } from "./commands/decision.js";

dotenv.config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
});

app.message(async ({ message, say }) => {
  try {
    if (message.subtype) return;

    if (!message.text) return;

    console.log(`📩 ${message.text}`);

    const text = message.text.trim().toLowerCase();

    if (text === "hello") {
      return await helloCommand({ message, say });
    }

    if (text === "help") {
      return await helpCommand({ say });
    }

    if (text === "history") {
      return await say(
        "📚 Decision history is coming in the next update."
      );
    }

    if (text.startsWith("compare ")) {
      return await say(
        "⚖️ Decision comparison is coming soon."
      );
    }

    await decisionCommand({ message, say });

  } catch (error) {
    console.error("App Error:", error);

    await say(
      "❌ Sorry, something went wrong while processing your request."
    );
  }
});

(async () => {
  await app.start();
  console.log("🚀 Helix is running...");
})();