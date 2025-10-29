import { LoaderIcon } from "lucide-react"

export default function LoadingProductPage() {
    return (
        <div>
            <LoaderIcon className="animate-spin" />
            <p>Carregando...</p>
        </div>
    )
}
