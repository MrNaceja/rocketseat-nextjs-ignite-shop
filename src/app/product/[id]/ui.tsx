"use client"

import { LoaderIcon } from "lucide-react"
import { use, useTransition } from "react"
import { Button } from "@/components/button"
import { ProductPreview } from "@/components/product-preview"
import { formatMonetary } from "@/utils/formatters/monetary"

type ProductPageUIProps = {
    productStream: Promise<Product & { priceId: string }>
}
export function ProductPageUI({ productStream }: ProductPageUIProps) {
    const product = use(productStream)

    const [isCreatingCheckoutSession, startCreateCheckoutSessionTransition] =
        useTransition()

    const handleClickBuyProduct = () => {
        startCreateCheckoutSessionTransition(async () => {
            try {
                const res = await fetch("/api/checkout", {
                    method: "POST",
                    body: JSON.stringify({ priceId: product.priceId }),
                })

                const checkoutSessionUrl = await res.text()
                window.location.href = checkoutSessionUrl
            } catch (e) {
                console.error(e)
                alert(
                    "Opss, houve um problema ao realizar a compra. Tente novamente mais tarde.",
                )
            }
        })
    }

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
                <Button
                    onClick={handleClickBuyProduct}
                    disabled={isCreatingCheckoutSession}
                >
                    {isCreatingCheckoutSession ? (
                        <>
                            <LoaderIcon className="animate-spin" />
                            Já é quase seu...
                        </>
                    ) : (
                        "Comprar agora"
                    )}
                </Button>
            </article>
        </main>
    )
}
