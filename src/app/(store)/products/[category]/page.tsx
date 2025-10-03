import { Product, productsList, categories } from "@/app/data/products"

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolveParams = await params
  const categorySlug = resolveParams.category.toLowerCase()
  const categoryInfo = categories.find((cat) => cat.slug === categorySlug)
  const categoryName = categoryInfo?.name || resolveParams.category
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-gradient-to-r from-[#003d5b] to-[#00798c] rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-3">{categoryName}</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Explore our selection of premium {categoryName.toLowerCase()} designed for exceptional performance
          </p>
        </div>
      </div>
    </div>
  )
}