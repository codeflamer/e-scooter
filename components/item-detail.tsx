"use client";
import React, { useState } from "react";

import ItemDisplay from "./item-display";
import ItemProperties from "./item-properties";
import { useProduct } from "@/hooks/query-hooks";
const ItemDetail = ({ productId }: { productId: number }) => {
  const { product, isLoading } = useProduct(productId);

  if (isLoading) {
    return <div>Product Info Loading..</div>;
  }

  return (
    <section>
      <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-10 justify-between">
        <ItemDisplay product={product!} />
        <ItemProperties product={product!} />
      </div>
    </section>
  );
};

export default ItemDetail;
