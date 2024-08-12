export const getProducts = async (): Promise<ProductType[]> => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (response.ok) {
    return await response.json();
  }
  throw new Error("Could not fetch products");
};

export const getProduct = async (productId: number): Promise<ProductType> => {
  const url = `https://fakestoreapi.com/products/${productId}`;
  console.log(url);
  const response = await fetch(url);
  if (response.ok) {
    return await response.json();
  }
  throw new Error("Could not fetch product");
};

export const getProductLimit = async (): Promise<ProductType[]> => {
  const url = `https://fakestoreapi.com/products?limit=5`;
  console.log(url);
  const response = await fetch(url);
  if (response.ok) {
    return await response.json();
  }
  throw new Error("Could not fetch products");
};
