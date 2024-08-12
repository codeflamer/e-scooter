import ItemDetail from "@/components/item-detail";
import NavProduct from "@/components/nav-product";
import React from "react";

const ProductItem = ({ params }: { params: { id: number } }) => {
  const productId = params.id;
  return (
    <main className="p-5 mx-auto max-w-screen-2xl ">
      <div className="mt-[20px]" />
      <NavProduct productId={productId} />
      <div className="mt-[40px]" />
      <ItemDetail productId={productId} />
      <div className="mt-[54px]" />
    </main>
  );
};

export default ProductItem;
