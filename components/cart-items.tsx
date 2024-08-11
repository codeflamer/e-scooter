"use client";

import { Button, Empty, Typography } from "antd";
import React from "react";
import EmptyCart from "./empty-cart";
import CartWithItems from "./cart-with-items";

const CartItems = () => {
  return (
    <section>
      <h2 className="mb-[30px] text-[35px] font-semibold">Моя корзина</h2>
      {/* <EmptyCart /> */}
      <CartWithItems />
    </section>
  );
};

export default CartItems;
