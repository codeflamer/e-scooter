import { getProduct, getProductLimit, getProducts } from "@/lib/get-products";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useProducts = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  return { products: data, isLoading, isSuccess };
};

export const useProduct = (productId: number) => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["products", productId],
    queryFn: () => getProduct(productId),
  });
  return { product: data, isLoading };
};

export const useProductLimit = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, error, isSuccess } = useQuery({
    queryKey: ["products"],
    queryFn: getProductLimit,
  });
  return { products: data, isLoading, error, isSuccess };
};
