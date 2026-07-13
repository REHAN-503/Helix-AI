export async function helloCommand({ message, say }) {
  await say(
    `👋 Hello <@${message.user}>!\n\nI'm *Helix AI*, your Decision Intelligence Assistant.\n\nType *help* to see everything I can do.`
  );
}