import { z } from 'zod'

const postDataSchema = z.object({
    title: z.string().min(2),
    body: z.string().min(50),
    imageUrl: z.string().min(5)
})

export { postDataSchema }