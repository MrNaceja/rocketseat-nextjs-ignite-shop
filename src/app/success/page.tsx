import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { redirect } from "next/navigation"
import type Stripe from "stripe"
import { Button } from "@/components/button"
import { ProductPreview } from "@/components/product-preview"
import { stripe } from "@/config/stripe"

type OrderDetails = {
    product: Pick<Product, "preview" | "name">
    customer: {
        name: string
    }
}

async function getOrderDetails(
    checkoutSessionId: string,
): Promise<OrderDetails> {
    const checkoutSession = await stripe.checkout.sessions.retrieve(
        checkoutSessionId,
        {
            expand: ["line_items", "line_items.data.price.product"],
        },
    )
    const [orderProduct] = checkoutSession.line_items?.data ?? []
    const productAdquired = (orderProduct.price as Stripe.Price)
        .product as Stripe.Product
    return {
        customer: {
            name: checkoutSession.customer_details?.name ?? "Cliente",
        },
        product: {
            preview: productAdquired.images[0],
            name: productAdquired.name,
        },
    }
}

export const metadata: Metadata = {
    title: "Compra efetuada",
    robots: { index: false },
}

type SuccessPageProps = PageProps<"/success"> & {
    searchParams: Promise<{ checkout_session_id: string }>
}
export default async function SuccessPage({ searchParams }: SuccessPageProps) {
    const { checkout_session_id: checkoutSessionId } = await searchParams

    if (!checkoutSessionId) {
        return redirect("/")
    }

    const order = await getOrderDetails(checkoutSessionId)

    return (
        <main className="container flex flex-col gap-6 items-center justify-center mx-auto min-h-[75vh]">
            <h1 className="text-4xl text-white">Compra efetuada!</h1>

            <ProductPreview
                src={order.product.preview}
                description={order.product.name}
                className="size-64!"
            />

            <p className="text-text text-2xl max-w-[50%] text-center">
                Uhuul <strong>{order.customer.name}</strong>, sua{" "}
                <strong>{order.product.name}</strong> já está a caminho da sua
                casa.
            </p>

            <Link href="/">
                <Button>
                    <ArrowLeft /> Voltar ao catálogo
                </Button>
            </Link>
        </main>
    )
}
