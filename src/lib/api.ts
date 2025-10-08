const API_BASE_URL = 'https://dummyjson.com';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface Category {
  slug: string;
  name: string;
  url: string;
}

// Fetch all products
export async function getProducts(limit: number = 30, skip: number = 0): Promise<ProductsResponse> {
  const response = await fetch(`${API_BASE_URL}/products?limit=${limit}&skip=${skip}`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
}

// Fetch products by category
export async function getProductsByCategory(category: string, limit: number = 30): Promise<ProductsResponse> {
  const response = await fetch(`${API_BASE_URL}/products/category/${category}?limit=${limit}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch products for category: ${category}`);
  }
  return response.json();
}

// Fetch all categories
export async function getCategories(): Promise<string[]> {
  const response = await fetch(`${API_BASE_URL}/products/categories`);
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }
  const categories = await response.json();
  
  // اگر categories آرایه‌ای از string باشه
  if (Array.isArray(categories) && categories.length > 0 && typeof categories[0] === 'string') {
    return categories;
  }
  
  // اگر categories آرایه‌ای از object باشه
  if (Array.isArray(categories) && categories.length > 0 && typeof categories[0] === 'object') {
    return categories.map((cat: any) => cat.slug || cat.name || cat);
  }
  
  return [];
}

// Fetch single product by ID
export async function getProduct(id: string): Promise<Product> {
  const response = await fetch(`${API_BASE_URL}/products/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch product: ${id}`);
  }
  return response.json();
}

// Search products
export async function searchProducts(query: string, limit: number = 30): Promise<ProductsResponse> {
  const response = await fetch(`${API_BASE_URL}/products/search?q=${query}&limit=${limit}`);
  if (!response.ok) {
    throw new Error('Failed to search products');
  }
  return response.json();
}