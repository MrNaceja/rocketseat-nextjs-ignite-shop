"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { ProductCard } from "@/app/(ui)/product-card"
import tshirt1 from "@/assets/t-shirts/1.png"
import tshirt2 from "@/assets/t-shirts/2.png"
import tshirt3 from "@/assets/t-shirts/3.png"
import tshirt4 from "@/assets/t-shirts/4.png"
import tshirt5 from "@/assets/t-shirts/5.png"

const tshirts = [tshirt1, tshirt2, tshirt3, tshirt4, tshirt5]

export function ProductsCarousel() {
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
        {tshirts.map((tshirt, idx) => (
          <SwiperSlide key={`${tshirt.src}-${idx}`}>
            <ProductCard preview={tshirt.src} />
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
