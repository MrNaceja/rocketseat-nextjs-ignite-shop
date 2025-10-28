import Image from "next/image"

export function Header() {
    return (
        <header className="container py-10">
            <Image
                src="/logo.svg"
                alt="Ignite Shop Logo"
                width={128}
                height={54}
                priority
            />
        </header>
    )
}
