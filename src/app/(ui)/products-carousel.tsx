"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { ProductCard } from "@/app/(ui)/product-card"

type ProductsCarouselProps = {
    products: Product[]
}
export function ProductsCarousel({ products }: ProductsCarouselProps) {
    return (
        <section>
            <Swiper
                modules={[Navigation]}
                slidesPerView={2}
                wrapperClass="flex items-center"
                spaceBetween={32}
                navigation={{
                    nextEl: "#action-next",
                    prevEl: "#action-prev",
                    disabledClass: "opacity-50 cursor-not-allowed",
                    hiddenClass: "hidden",
                }}
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <ProductCard product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <button
                type="button"
                id="action-prev"
                title="Navegar para à esquerda"
                className="h-full bg-linear-to-r from-background to-transparent fixed left-0 top-0 bottom-0 grid place-items-center min-w-24"
            >
                <ChevronLeft />
            </button>
            <button
                type="button"
                id="action-next"
                title="Navegar para à direita"
                className="h-full bg-linear-to-r from-transparent to-background fixed right-0 top-0 bottom-0 grid place-items-center min-w-24"
            >
                <ChevronRight />
            </button>
        </section>
    )
}
