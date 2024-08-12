"use client";

import { Button, Empty, Typography } from "antd";
import React from "react";
import EmptyCart from "./empty-cart";
import CartWithItems from "./cart-with-items";
import { useProductCart } from "@/app/cart/carts.store";

const CartItems = () => {
  const cartItems = useProductCart((state) => state.cartItems);
  return (
    <section>
      <h2 className="mb-[30px] text-[35px] font-semibold">Моя корзина</h2>
      {cartItems.length > 0 ? (
        <CartWithItems cartItems={cartItems} />
      ) : (
        <EmptyCart />
      )}
    </section>
  );
};

export default CartItems;
