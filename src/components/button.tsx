import type { ComponentProps } from "react"
import { cn } from "@/utils/cn"

export function Button({ className, ...props }: ComponentProps<"button">) {
    return (
        <button
            {...props}
            className={cn(
                "bg-brand-primary text-white px-4 py-3 font-bold rounded-md hover:bg-brand-light flex items-center gap-2 justify-center",
                className,
            )}
        />
    )
}
