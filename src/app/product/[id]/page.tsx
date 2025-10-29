import type Stripe from "stripe"
import { ProductPageUI } from "@/app/product/[id]/ui"
import { stripe } from "@/config/stripe"

export async function generateStaticParams() {
    return [
        {
            id: "prod_TJcOClfzy3qZEx",
        },
    ]
}

async function getProduct(id: string): Promise<Product & { priceId: string }> {
    const product = await stripe.products.retrieve(id, {
        expand: ["default_price"],
    })

    const price = product.default_price as Stripe.Price
    return {
        id,
        name: product.name,
        description: product.description ?? "",
        preview: product.images[0],
        price: (price.unit_amount ?? 0) / 100,
        priceId: price.id,
    }
}

type ProductPageProps = PageProps<"/product/[id]">
export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params
    const product = getProduct(id)
    return <ProductPageUI productStream={product} />
}
