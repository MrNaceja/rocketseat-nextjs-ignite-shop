import { type NextRequest, NextResponse } from "next/server"
import z4 from "zod/v4"
import { stripe } from "@/config/stripe"

const createCheckoutSessionBodySchema = z4.object({
    priceId: z4.string("Price ID is required!"),
})
export async function POST(req: NextRequest) {
    const body = await req.json()
    const parseResult = createCheckoutSessionBodySchema.safeParse(body)

    if (!parseResult.success) {
        const errors = z4.treeifyError(parseResult.error)
        return new NextResponse(errors.properties?.priceId?.errors.join("\n"), {
            status: 400,
        })
    }

    const { priceId } = parseResult.data

    const checkoutSession = await stripe.checkout.sessions.create({
        mode: "payment",
        cancel_url: req.nextUrl.origin,
        success_url: req.nextUrl.origin.concat("/success"),
        line_items: [
            {
                quantity: 1,
                price: priceId,
            },
        ],
    })

    return new NextResponse(checkoutSession.url, { status: 201 })
}
