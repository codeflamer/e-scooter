"use client";
import React, { Fragment } from "react";
import CartItem from "./cart-item";
import { useProductCart } from "@/app/cart/carts.store";

const CartTable = () => {
  const cartItems = useProductCart((state) => state.cartItems);

  return (
    <div>
      <div className="grid grid-cols-12 font-semibold text-base-black bg-[#F4F7FB] text-[12px] px-[21px] py-[11px] rounded-md">
        <h5 className="col-span-6 ">Товар</h5>
        <h5 className="col-span-2 text-center">Количество</h5>
        <h5 className="col-span-2 text-center">Сумма</h5>
        <h5 className="col-span-2 text-center">Удалить все</h5>
      </div>
      {cartItems.map((product: ProductType & { count: number }) => (
        <Fragment key={product.id}>
          <CartItem product={product} />
        </Fragment>
      ))}
    </div>
  );
};

export default CartTable;
