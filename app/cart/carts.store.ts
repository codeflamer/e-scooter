import { create } from "zustand";

interface ProductCart {
  cartItems: (ProductType & { count: number })[];
  totalAmount: number;
  addItemToCart: (newItem: ProductType) => void;
  deleteFromCart: (id: number) => void;
  increaseItemCount: (id: number) => void;
  decreaseItemCount: (id: number) => void;
}

export const useProductCart = create<ProductCart>((set, get) => ({
  cartItems: [],
  totalAmount: 0,
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
        currentItem,
        ...state.cartItems.filter((item) => item.id !== newItem.id),
      ],
    }));
    set((state) => ({
      totalAmount: state.cartItems.reduce(
        (acc, item) => acc + item.count * item.price,
        0
      ),
    }));
  },
  deleteFromCart: (id: number) => {
    const { cartItems: oldCartItems } = get();
    const filteredItems = oldCartItems.filter((item) => item.id !== id);
    set({ cartItems: filteredItems });
    set((state) => ({
      totalAmount: state.cartItems.reduce(
        (acc, item) => acc + item.count * item.price,
        0
      ),
    }));
  },
  increaseItemCount: (id: number) => {
    // const { cartItems } = get();
    // const updatedItemCount =

    set((state) => ({
      cartItems: [
        ...state.cartItems.map((item) => {
          if (item.id === id) {
            item.count += 1;
          }
          return item;
        }),
      ],
    }));

    set((state) => ({
      totalAmount: state.cartItems.reduce(
        (acc, item) => acc + item.count * item.price,
        0
      ),
    }));
  },
  decreaseItemCount: (id: number) => {
    const { cartItems, deleteFromCart } = get();
    const item = cartItems.find((item) => item.id == id);
    if (item!.count > 1) {
      set((state) => ({
        cartItems: [
          ...state.cartItems.map((item) => {
            if (item.id === id) {
              item.count -= 1;
            }

            return item;
          }),
        ],
      }));
      set((state) => ({
        totalAmount: state.cartItems.reduce(
          (acc, item) => acc + item.count * item.price,
          0
        ),
      }));
    } else {
      deleteFromCart(id);
    }
  },
}));
