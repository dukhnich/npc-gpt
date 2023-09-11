import OpenAI from "openai";

const openai = new OpenAI();

export default async function (req, res) {

  const animal = req.body.animal || '';
  if (animal.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid aligment",
      }
    });
    return;
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: generatePrompt(animal),
      temperature: 0.6,
    });
    console.log(completion)
    res.status(200).json({ result: completion.choices[0].message.content });
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

function generatePrompt(aligment) {
  return [
    {
      role: 'system',
      content: `You are an elf from fantasy world. Your aligment is ${aligment}. Answer in Czech`
    },
    {
      role: 'user',
      content: 
      `Greet a hero`,
    }
  ]
}
