import ItemDetail from "@/components/item-detail";
import NavProduct from "@/components/nav-product";
import React from "react";

const ProductItem = () => {
  return (
    <main className="p-5 mx-auto max-w-screen-2xl ">
      <div className="mt-[20px]" />
      <NavProduct />
      <div className="mt-[40px]" />
      <ItemDetail />
      <div className="mt-[54px]" />
    </main>
  );
};

export default ProductItem;
