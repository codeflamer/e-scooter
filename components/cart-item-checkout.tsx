import { Button, Checkbox } from "antd";
import React from "react";
import type { CheckboxProps } from "antd";
import { useProductCart } from "@/app/cart/carts.store";

const CartItemCheckout = () => {
  const totalAmount = useProductCart((state) => state.totalAmount);

  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div>
      <div className="bg-[#F4F7FB] flex flex-col items-center px-[27px] py-[20px] rounded-md">
        <div className="text-base-black">
          <h6 className="text-[12px]">Итого</h6>
          <span className="text-[25px] font-semibold mb-[10px] inline-block">
            {totalAmount} ₽
          </span>
          <hr />
          <ul className="flex justify-between items-center space-x-10 mt-[16px]">
            <li className="text-[12px] ">Стоимость товаров</li>
            <li className="font-semibold">{totalAmount} ₽</li>
          </ul>
          <ul className="flex justify-between items-center space-x-10 mt-[16px]">
            <li className="text-[12px] ">Сумма скидки</li>
            <li className="font-semibold">50 ₽</li>
          </ul>
          <ul className="flex justify-between items-center space-x-10 my-[16px]">
            <li className="text-[12px] ">Итого без учета доставки</li>
            <li className="font-semibold">{totalAmount - 30} ₽</li>
          </ul>
          <hr />
          <div className="mt-[20px] flex flex-col items-center">
            <Button
              htmlType="button"
              className="!bg-base !border-none !text-base !py-6 !px-4  !text-white !text-[14px] w-full"
            >
              Оформить заказ
            </Button>
          </div>
          <div className="mt-4 flex space-x-2 items-center">
            <div className="self-start">
              <Checkbox onChange={onChange}></Checkbox>
            </div>

            <p className="text-[12px] max-w-[221px] text-justify">
              Нажимая на кнопку, вы соглашаетесь на обработку персональных
              данных и{" "}
              <span className="text-[#6F73EE] cursor-pointer">
                политикой конфиденциальности.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemCheckout;
