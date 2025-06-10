const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api";

export async function fetchFeaturedProducts() {
  const response = await fetch(`${API_BASE_URL}/products/featured`);
  if (!response.ok) {
    throw new Error("Failed to fetch featured products");
  }
  return response.json();
}

export async function fetchProducts(filters = {}) {
  const query = new URLSearchParams();

  if (filters.category) query.append("category", filters.category);
  if (filters.sort) query.append("sort", filters.sort);
  if (filters.search) query.append("search", filters.search);

  const response = await fetch(`${API_BASE_URL}/products?${query.toString()}`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
}

export async function fetchProductBySlug(slug) {
  const response = await fetch(`${API_BASE_URL}/products/${slug}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  return response.json();
}

export async function fetchCategories() {
  const response = await fetch(`${API_BASE_URL}/categories`);
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  return response.json();
}

export async function createOrder(orderData) {
  const response = await fetch(`${API_BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });

  if (!response.ok) {
    throw new Error("Failed to create order");
  }

  return response.json();
}
