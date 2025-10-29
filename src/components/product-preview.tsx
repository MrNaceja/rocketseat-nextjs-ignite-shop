import Image from "next/image"
import type { PropsWithChildren } from "react"
import { cn } from "@/utils/cn"

type ProductPreviewProps = PropsWithChildren & {
    src: string
    description: string
    className?: string
}
export function ProductPreview({
    src,
    description,
    children,
    className,
}: ProductPreviewProps) {
    return (
        <div
            className={cn(
                "*:select-none shrink-0 overflow-hidden rounded-lg p-1 bg-linear-to-b from-brand-primary to-brand-secondary aspect-square size-[456px] 2xl:size-[656px] grid place-items-center",
                className,
            )}
        >
            <Image
                src={src}
                alt={description}
                width={400}
                height={400}
                className="flex-1 object-contain size-64 2xl:size-96"
            />
            {children}
        </div>
    )
}
