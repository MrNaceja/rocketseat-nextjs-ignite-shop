import type Stripe from "stripe"
import { Button } from "@/components/button"
import { ProductPreview } from "@/components/product-preview"
import { stripe } from "@/config/stripe"
import { formatMonetary } from "@/utils/formatters/monetary"

export async function generateStaticParams() {
    return [
        {
            id: "prod_TJcOClfzy3qZEx",
        },
    ]
}

async function getProduct(id: string): Promise<Product> {
    const product = await stripe.products.retrieve(id, {
        expand: ["default_price"],
    })
    return {
        id,
        name: product.name,
        description: product.description ?? "",
        preview: product.images[0],
        price:
            ((product.default_price as Stripe.Price)?.unit_amount ?? 0) / 100,
    }
}

type ProductPageProps = PageProps<"/product/[id]">
export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params
    const product = await getProduct(id)

    return (
        <main className="container grid grid-cols-2 gap-3 mx-auto px-10">
            <ProductPreview
                src={product.preview}
                description={product.name}
            />
            <article className="flex flex-col">
                <div className="flex-1 flex flex-col gap-3">
                    <h1 className="text-4xl text-title leading-relaxed">
                        {product.name}
                    </h1>

                    <strong className="text-3xl text-brand-light">
                        {formatMonetary(product.price)}
                    </strong>

                    <p className="text-md text-text leading-normal my-2">
                        {product.description}
                    </p>
                </div>
                <Button>Comprar agora</Button>
            </article>
        </main>
    )
}
