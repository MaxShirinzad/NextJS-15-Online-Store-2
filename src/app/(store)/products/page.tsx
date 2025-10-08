'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { getCategories, getProducts } from '@/lib/api';
import { ProductCard } from '@/app/components/product-card';
import { useState, useEffect } from 'react';

// تابع helper برای فرمت کردن category
function formatCategory(category: string): string {
  if (typeof category !== 'string') {
    return 'Unknown Category';
  }
  return category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

export default function ProductsPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Fetch categories
  const {
    data: categories = [],
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
    enabled: isMounted,
  });

  // Fetch products
  const {
    data: productsData,
    isLoading: productsLoading,
    error: productsError,
  } = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(30),
    enabled: isMounted,
  });

  const products = productsData?.products || [];

  // برای دیباگ - دیتای categories رو چک کنید
  useEffect(() => {
    if (categories.length > 0) {
      console.log('Categories data:', categories);
      console.log('First category type:', typeof categories[0]);
      console.log('First category value:', categories[0]);
    }
  }, [categories]);

  if (!isMounted) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (categoriesError || productsError) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-red-500">
          Error loading data. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Categories Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Shop by Category</h2>
        {categoriesLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 h-32 rounded-lg mb-2"></div>
                <div className="bg-gray-200 h-4 rounded w-3/4 mx-auto"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => {
              // مطمئن بشیم category یه string هست
              const categorySlug = typeof category === 'string' ? category : String(category);
              const displayName = formatCategory(categorySlug);
              
              return (
                <Link
                  key={categorySlug}
                  href={`/products/category/${categorySlug}`}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                    <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-300 transition-colors">
                      <span className="text-2xl">📦</span>
                    </div>
                    <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {displayName}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      {/* Featured Products Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
        {productsLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                <div className="bg-gray-200 h-4 rounded mb-2"></div>
                <div className="bg-gray-200 h-4 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.thumbnail}
                category={product.category}
                rating={product.rating}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}