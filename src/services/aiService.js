import ai from "../config/ai.js";
import decisionPrompt from "../prompts/decisionPrompt.js";

export async function generateDecisionAnalysis(question) {
  try {
    const response = await ai.post("/chat/completions", {
      model: process.env.AI_MODEL,

      max_tokens: 800,
      temperature: 0.3,

      messages: [
        {
          role: "system",
          content: decisionPrompt,
        },
        {
          role: "user",
          content: question,
        },
      ],
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("OpenRouter Error:");

    if (error.response) {
      console.error(error.response.data);
    } else {
      console.error(error.message);
    }

    throw error;
  }
}