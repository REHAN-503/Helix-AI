export async function helpCommand({ say }) {
  await say(`
🧠 *HELIX AI*

Available Commands

• hello
• help
• history *(coming soon)*
• compare *(coming soon)*

Or simply ask any decision question.

Example:

Should I build a mobile app first?

Should I use PostgreSQL?

Should I buy a MacBook Air M4?
`);
}