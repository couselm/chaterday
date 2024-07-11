import OpenAI from 'openai'

const openai = new OpenAI(process.env.VITE_OPENAI_API_KEY)

export const getStreamResponse = async (messages) => {
  const stream = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: messages,
    stream: true,
  })

  return stream
}
