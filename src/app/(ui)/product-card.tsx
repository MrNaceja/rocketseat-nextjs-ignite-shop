import Image from "next/image"

type ProductCard = {
  preview: string
}
export function ProductCard({ preview }: ProductCard) {
  return (
    <div className="group shrink-0 overflow-hidden rounded-lg p-1 bg-linear-to-b from-brand-primary to-brand-secondary aspect-square size-[656px] flex flex-col gap-3 items-center">
      <Image
        src={preview}
        alt=""
        width={400}
        height={400}
        className="flex-1 object-contain"
      />
      <footer className="bg-background rounded-md p-8 flex items-center gap-3 justify-between w-full translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out">
        <span className="text-title font-bold text-xl">
          Camiseta Beyond the Limits
        </span>

        <strong className="text-brand-primary text-2xl font-bold">
          R$ 47,99
        </strong>
      </footer>
    </div>
  )
}
