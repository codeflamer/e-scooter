import React from "react";
import CartTable from "./cart-table";
import CartItemCheckout from "./cart-item-checkout";

const CartWithItems = ({
  cartItems,
}: {
  cartItems: (ProductType & { count: number })[];
}) => {
  return (
    <section>
      <div>
        <h5 className="text-[15px] text-[#5D6C7B] mb-[41px]">
          {cartItems.length} товара{" "}
        </h5>
        <div className="flex flex-col lg:flex-row lg:space-x-10 lg:justify-between">
          <CartTable />
          <CartItemCheckout />
        </div>
      </div>
    </section>
  );
};

export default CartWithItems;
