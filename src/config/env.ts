import z4 from "zod/v4"

export const envSchema = z4.object({
    STRIPE_PUBLIC_KEY: z4.string("Stripe integration PUBLIC_KEY dont founded"),
    STRIPE_SECRET_KEY: z4.string("Stripe integration PUBLIC_KEY dont founded"),
})

export const env = envSchema.parse(process.env)
