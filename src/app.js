import dotenv from "dotenv";
import { App } from "@slack/bolt";

dotenv.config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
});

app.message("hello", async ({ message, say }) => {
  await say(`👋 Hello <@${message.user}>! I'm Helix.`);
});

(async () => {
  await app.start();

  console.log("🚀 Helix is running...");
})();