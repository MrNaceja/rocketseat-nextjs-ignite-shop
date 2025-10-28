/**
 * @example R$ 0.00
 */
export function formatMonetary(value: number) {
    return new Intl.NumberFormat("pt-BR", {
        currency: "BRL",
        style: "currency",
    }).format(value)
}
