import React from "react";
import CartItem from "./cart-item";

const CartTable = () => {
  return (
    <div>
      <div className="grid grid-cols-12 font-semibold text-base-black bg-[#F4F7FB] text-[12px] px-[21px] py-[11px] rounded-md">
        <h5 className="col-span-6 ">Товар</h5>
        <h5 className="col-span-2 text-center">Количество</h5>
        <h5 className="col-span-2 text-center">Сумма</h5>
        <h5 className="col-span-2 text-center">Удалить все</h5>
      </div>
      <CartItem />
      <CartItem />
    </div>
  );
};

export default CartTable;
