import fetch from "node-fetch";

const MODELS = [
  "google/gemma-4-31b-it:free",
  "google/gemma-4-26b-a4b-it:free",
  "nvidia/nemotron-3-super-120b-a12b:free",
  "meta-llama/llama-3.3-70b-instruct:free",
  "qwen/qwen3-coder:free",
  "minimax/minimax-m2.5:free",
];

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

async function callOpenRouter(messages, apiKey) {
  for (const model of MODELS) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 25000);

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
          "HTTP-Referer": "https://gyanmarg.edu",
          "X-Title": "GyanMarg AI Tutor",
        },
        body: JSON.stringify({
          model,
          messages,
          max_tokens: 1024,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (response.status === 429) {
        console.log(`Rate limited on ${model}, trying next...`);
        await delay(1000);
        continue;
      }

      if (!response.ok) {
        const err = await response.json().catch(() => null);
        console.error(`${model} error:`, response.status, err?.error?.message);
        continue;
      }

      const data = await response.json();

      if (data.error) {
        console.error(`${model} response error:`, data.error.message);
        continue;
      }

      const content = data.choices?.[0]?.message?.content;
      if (content) return content;
    } catch (err) {
      if (err.name === "AbortError") {
        console.log(`${model} timed out, trying next...`);
        continue;
      }
      console.error(`${model} fetch error:`, err.message);
      continue;
    }
  }
  return null;
}

export const askTutor = async (req, res) => {
  try {
    const { question, grade, language } = req.body;

    if (!question || !question.trim()) {
      return res.status(400).json({ message: "Please enter a question." });
    }

    if (!process.env.OPENROUTER_API_KEY) {
      return res.status(503).json({ message: "AI service is not configured. Please contact admin." });
    }

    const isOdia = language === "od";

    const systemPrompt = isOdia
      ? `ତୁମେ GyanMarg AI ଶିକ୍ଷକ, ଭାରତର ଶ୍ରେଣୀ ${grade || "6-12"} ଛାତ୍ରମାନଙ୍କ ପାଇଁ ଏକ ବନ୍ଧୁତ୍ୱପୂର୍ଣ୍ଣ ଶୈକ୍ଷିକ ସହାୟକ।
IMPORTANT: ତୁମେ ସମ୍ପୂର୍ଣ୍ଣ ଓଡ଼ିଆ ଭାଷାରେ ଉତ୍ତର ଦେବ। ଇଂରାଜୀ ବ୍ୟବହାର କର ନାହିଁ।
ନିର୍ଦ୍ଦେଶ:
- ପାହୁଣା ପାହୁଣା ବ୍ୟାଖ୍ୟା ଦିଅ
- ବିଦ୍ୟାଳୟ ଛାତ୍ରମାନଙ୍କ ପାଇଁ ସରଳ ଭାଷା ବ୍ୟବହାର କର
- ଉଦାହରଣ ଦିଅ
- ଉତ୍ସାହିତ ଏବଂ ସହାୟକ ହୁଅ
- ୨୫୦ ଶବ୍ଦରୁ କମ୍ ରଖ
- ମାର୍କଡାଉନ ବ୍ୟବହାର କର ନାହିଁ। **, ##, *, backtick ବ୍ୟବହାର କର ନାହିଁ।
- କେବଳ ସାଧା ପାଠ୍ୟ ବ୍ୟବହାର କର। ସଂଖ୍ୟା ତାଲିକା (1. 2. 3.) କିମ୍ବା ଡ୍ୟାସ (-) ବ୍ୟବହାର କର।`
      : `You are GyanMarg AI Tutor, a friendly educational assistant for Class ${grade || "6-12"} students in India.
IMPORTANT: You MUST respond entirely in English. Do not use any other language.
Instructions:
- Give step-by-step explanations
- Use simple language appropriate for school students
- Include examples where helpful
- Be encouraging and supportive
- Keep responses concise (under 250 words)
- IMPORTANT: Do NOT use markdown formatting. No **, no ##, no *, no backticks.
- Use plain text only. Use numbered lists (1. 2. 3.) or dashes (-) for points.
- For math formulas, write them in plain text like: a² + b² = c²`;

    const messages = [
      { role: "system", content: systemPrompt },
      { role: "user", content: question },
    ];

    const answer = await callOpenRouter(messages, process.env.OPENROUTER_API_KEY);

    if (!answer) {
      return res.status(503).json({ message: "All AI models are busy right now. Please try again in a few seconds." });
    }

    // Clean markdown artifacts from response
    const cleaned = answer
      .replace(/\*\*\*(.*?)\*\*\*/g, "$1")
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .replace(/\*(.*?)\*/g, "$1")
      .replace(/^#{1,6}\s*/gm, "")
      .replace(/```[\s\S]*?```/g, (match) => match.replace(/```\w*\n?/g, "").trim())
      .replace(/`([^`]+)`/g, "$1")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/^[\s]*[-*]\s/gm, "- ")
      .replace(/\n{3,}/g, "\n\n")
      .trim();

    res.json({ answer: cleaned });
  } catch (error) {
    console.error("AI Tutor error:", error.message);
    res.status(500).json({ message: "Something went wrong. Please try again later." });
  }
};
