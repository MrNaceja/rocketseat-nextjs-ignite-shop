import Image from "next/image"
import Link from "next/link"

export function Header() {
    return (
        <header className="container py-10">
            <Link
                href="/"
                prefetch={false}
                className="flex w-fit"
            >
                <Image
                    src="/logo.svg"
                    alt="Ignite Shop Logo"
                    width={128}
                    height={54}
                    priority
                />
            </Link>
        </header>
    )
}
