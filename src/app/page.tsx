import { ProductCard } from "@/app/(ui)/product-card"
import tshirt1 from "@/assets/t-shirts/1.png"
import tshirt2 from "@/assets/t-shirts/2.png"
import tshirt3 from "@/assets/t-shirts/3.png"
import tshirt4 from "@/assets/t-shirts/4.png"
import tshirt5 from "@/assets/t-shirts/5.png"

const tshirts = [tshirt1, tshirt2, tshirt3, tshirt4, tshirt5]

export default function HomePage() {
  return (
    <section className="overflow-x-scroll h-fit flex items-center gap-12 container">
      {tshirts.map((tshirt, idx) => (
        <ProductCard
          preview={tshirt.src}
          key={`${tshirt.src}-${idx}`}
        />
      ))}
    </section>
  )
}
