import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  rating?: number;
}

// تابع helper برای فرمت کردن category
function formatCategory(category: string): string {
  if (typeof category !== 'string') {
    return 'Unknown';
  }
  return category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

export function ProductCard({ id, title, price, image, category, rating }: ProductCardProps) {
  const displayCategory = formatCategory(category);

  return (
    <Link href={`/products/${id}`} className="group">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
        <div className="relative h-48 bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
        <div className="p-4">
          <span className="text-xs text-gray-500 uppercase font-medium">
            {displayCategory}
          </span>
          <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-gray-900">${price}</span>
            {rating && (
              <div className="flex items-center space-x-1">
                <span className="text-yellow-400">★</span>
                <span className="text-sm text-gray-600">{rating.toFixed(1)}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}