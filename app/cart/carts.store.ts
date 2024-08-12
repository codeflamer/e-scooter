import { create } from "zustand";

interface ProductCart {
  cartItems: (ProductType & { count: number })[];
  addItemToCart: (newItem: ProductType) => void;
  deleteFromCart: (id: number) => void;
}

export const useProductCart = create<ProductCart>((set, get) => ({
  cartItems: [],
  addItemToCart: (newItem: ProductType) => {
    const { cartItems } = get(); //get all the items in the cart
    let currentItem: ProductType & { count: number } = { ...newItem, count: 1 }; //if we are adding item the first time, creat new key count with value 1
    const itemexist = cartItems.find((item) => item.id == newItem.id); // try to get item if it already exists
    if (itemexist) {
      //if item already exists, increase the value of count
      currentItem = { ...itemexist, count: itemexist.count + 1 };
    }
    //filter the old item from the cart and add a new one to the right
    set((state) => ({
      cartItems: [
        ...state.cartItems.filter((item) => item.id !== newItem.id),
        currentItem,
      ],
    }));
  },
  deleteFromCart: (id: number) => {
    const { cartItems: oldCartItems } = get();
    const filteredItems = oldCartItems.filter((item) => item.id !== id);
    set({ cartItems: filteredItems });
  },
}));
