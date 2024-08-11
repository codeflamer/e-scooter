import CartItems from "@/components/cart-items";
import ItemsRecommendation from "@/components/items-recommendation";
import NavCrumb from "@/components/nav-crumb";
import React from "react";
import "../slider-recommendation.css";

const Cart = () => {
  return (
    // p-5 mx-auto max-w-screen-2xl
    <main className="p-5 mx-auto max-w-screen-2xl">
      <div className="mt-[20px]" />
      <NavCrumb />
      <div className="mt-[49px]" />
      <CartItems />
      <div className="mt-[90px]" />
      <ItemsRecommendation />
      <div className="mt-[90px] " />
    </main>
  );
};

export default Cart;
