import fs from "fs/promises";

const DB_PATH = "./src/database/decisions.json";

export async function getDecisions() {
  try {
    const data = await fs.readFile(DB_PATH, "utf8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function saveDecision(decision) {
  const decisions = await getDecisions();

  decisions.unshift({
    id: Date.now(),
    timestamp: new Date().toISOString(),
    ...decision,
  });

  await fs.writeFile(
    DB_PATH,
    JSON.stringify(decisions, null, 2)
  );
}

export async function getRecentDecisions(limit = 5) {
  const decisions = await getDecisions();
  return decisions.slice(0, limit);
}