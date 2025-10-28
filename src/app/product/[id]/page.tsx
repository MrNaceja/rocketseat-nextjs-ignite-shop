type ProductPageProps = PageProps<"/product/[id]">
export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params

    return <main>Produto {id}</main>
}
