import { ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/button"

export default function SuccessPage() {
    return (
        <main className="container flex flex-col gap-3 items-center justify-center mx-auto min-h-[75vh]">
            <CheckCircle className="size-64 text-brand-light animate-bounce" />
            <h1 className="text-4xl text-white">
                Sua compra foi realizada com <strong>Sucesso</strong>
            </h1>

            <Link href="/">
                <Button>
                    <ArrowLeft /> Continuar comprando
                </Button>
            </Link>
        </main>
    )
}
