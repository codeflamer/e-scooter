type ProductType = {
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
  rating: {
    count: number;
    rate: number;
  };
  images?: string[];
};
