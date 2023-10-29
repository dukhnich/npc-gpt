import OpenAI from "openai";

const openai = new OpenAI({ apiKey: "my-key", dangerouslyAllowBrowser: true });

function generatePrompt(aligment) {
  return [
    {
      role: "system",
      content: `You are an elf from fantasy world. Your aligment is ${aligment}. Answer in Czech`,
    },
    {
      role: "user",
      content: `Greet a hero`,
    },
  ];
}

export default async function ({ animal }) {
  if (animal.trim().length === 0) {
    throw new Error("Please enter a valid aligment");
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: generatePrompt(animal),
      temperature: 0.6,
    });
    console.log(completion);
    return { result: completion.choices[0].message.content };
  } catch (error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      throw error;
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      throw new Error("An error occurred during your request.");
    }
  }
}
