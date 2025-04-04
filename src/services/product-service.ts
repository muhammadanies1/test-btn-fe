import { Product } from "@/types/product";

const fetchProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch("/api/product");
    if (!res.ok) throw new Error("Failed to fetch products");
    return await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export default fetchProducts;
