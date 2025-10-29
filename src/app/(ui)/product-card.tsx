import { ProductPreview } from "@/components/product-preview"
import { formatMonetary } from "@/utils/formatters/monetary"

type ProductCard = {
    product: Product
}
export function ProductCard({ product }: ProductCard) {
    return (
        <ProductPreview
            src={product.preview}
            description={product.name}
            className="flex flex-col group"
        >
            <footer className="bg-background rounded-md p-4 2xl:p-8 flex items-center gap-3 justify-between w-full translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out">
                <span className="text-title font-bold text-md 2xl:text-xl">
                    {product.name}
                </span>

                <strong className="text-brand-primary text-xl 2xl:text-2xl font-bold">
                    {formatMonetary(product.price)}
                </strong>
            </footer>
        </ProductPreview>
    )
}
