export const getProducts = async (): Promise<ProductType[]> => {
  const response = await fetch("https://api.escuelajs.co/api/v1/products");
  if (response.ok) {
    return (await response.json()).splice(1, 5);
  }
  throw new Error("Could not fetch products");
};

export const getProduct = async (productId: number): Promise<ProductType> => {
  const url = `https://api.escuelajs.co/api/v1/products/${productId}`;
  console.log(url);
  const response = await fetch(url);
  if (response.ok) {
    return await response.json();
  }
  throw new Error("Could not fetch product");
};

export const getProductLimit = async (): Promise<ProductType[]> => {
  const url = `https://api.escuelajs.co/api/v1/products?limit=10`;
  const response = await fetch(url);
  if (response.ok) {
    return (await response.json()).splice(1, 5);
  }
  throw new Error("Could not fetch products");
};
