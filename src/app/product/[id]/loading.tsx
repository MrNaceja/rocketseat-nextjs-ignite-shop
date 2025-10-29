import { LoaderIcon } from "lucide-react"

export default function LoadingProductPage() {
    return (
        <div className="size-full flex flex-col items-center justify-center gap-3 min-h-[75vh]">
            <LoaderIcon className="animate-spin size-10" />
            <p>Carregando...</p>
        </div>
    )
}
