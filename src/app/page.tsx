import type Stripe from "stripe"
import { ProductsCarousel } from "@/app/(ui)/products-carousel"
import { stripe } from "@/config/stripe"

export const revalidate = 3600 // 1 hour

export default async function HomePage() {
    const productsResponse = await stripe.products.list({
        expand: ["data.default_price"],
    })

    const products: Product[] = productsResponse.data.map((p) => ({
        id: p.id,
        name: p.name,
        price: ((p.default_price as Stripe.Price)?.unit_amount ?? 0) / 100,
        preview: p.images.at(0) as string,
        description: p.description ?? "",
    }))

    return (
        <main className="container">
            <ProductsCarousel products={products} />
        </main>
    )
}
