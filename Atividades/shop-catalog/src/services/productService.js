import api from "./api";

export async function getProducts(limit = 12, skip = 0) {
  const response = await api.get("/products", {
    params: { limit, skip },
  });
  return response.data;
}

export async function getProductById(id) {
  const response = await api.get(`/products/${id}`);
  return response.data;
}

export async function getCategories() {
  const response = await api.get("/products/categories");
  return response.data;
}

export async function getProductsByCategory(category) {
  const response = await api.get(
    `/products/category/${encodeURIComponent(category)}`
  );
  return response.data;
}

export async function searchProducts(query) {
  const response = await api.get("/products/search", {
    params: { q: query },
  });
  return response.data;
}