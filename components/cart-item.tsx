"use client";

import { DeleteOutlined } from "@ant-design/icons";
import Image from "next/image";
import React from "react";
import CartDetailOption from "./cart-detail-option";
import Link from "next/link";
import { useProductCart } from "@/app/cart/carts.store";

const CartItem = ({
  product,
}: {
  product: ProductType & { count: number };
}) => {
  const deleteItem = useProductCart((state) => state.deleteFromCart);
  const increaseProductCount = useProductCart(
    (state) => state.increaseItemCount
  );
  const decreaseProductCount = useProductCart(
    (state) => state.decreaseItemCount
  );

  return (
    <div>
      {/* <Link href="/1234/scooter"> */}
      <div className="grid grid-cols-12 text-base-black px-[21px] py-[11px] rounded-md space-x-2">
        <div className="col-span-6">
          <Link href={`/${product.id}/scooter`}>
            <div className="flex space-x-[19px] items-center">
              <Image
                src={product.images![0]}
                alt="scotter-image"
                height="120"
                width="120"
                className="rounded-lg h-[80px] w-[100px]  md:w-[120px]"
              />
              <div>
                <h3 className="text-[17px] md:text-[20px] font-semibold truncate max-w-[60px] md:max-w-[200px] lg:max-w-[300px]">
                  {product.title}
                </h3>
                <p className="flex flex-col md:flex-row items-center justify-between md:space-x-2">
                  <div className="flex items-center">
                    <span className="block w-2 h-2 bg-[#75D14A] rounded-full mr-1"></span>
                    <span className="text-[#5D6C7B] text-[12px] whitespace-nowrap">
                      В наличии
                    </span>{" "}
                  </div>
                  <span className="text-[12px]">+ 2 подарка</span>
                </p>
              </div>
            </div>
          </Link>
          <div></div>
        </div>
        <h5 className="col-span-2 flex flex-col justify-center items-center">
          <div className="w-[60px] sm:w-[80px] md:w-[120px] flex items-center justify-between px-[17px] py-[8px] rounded-md bg-[#F4F7FB]">
            <div
              className="text-[#5D6C7B] text-[14px] md:text-[17px] cursor-pointer"
              onClick={() => decreaseProductCount(product.id)}
            >
              -
            </div>
            <div className="text-[14px] md:text-[16px]">{product.count}</div>
            <div
              className="text-[#5D6C7B] text-[14px] md:text-[17px] cursor-pointer"
              onClick={() => increaseProductCount(product.id)}
            >
              +
            </div>
          </div>
        </h5>
        <h5 className="col-span-2 font-semibold text-base-black text-nowrap text-[13px] md:text-[20px] text-center flex flex-col items-center justify-center">
          {(product.count * product.price).toFixed(2)} ₽
        </h5>
        <h5 className=" cursor-pointer col-span-2 text-[17px] md:text-[22px] text-base-black flex flex-col justify-center items-center">
          <DeleteOutlined onClick={() => deleteItem(product.id)} />
        </h5>
      </div>
      {/* </Link> */}

      <div className="border rounded-lg px-[10px] py-[16px]">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <CartDetailOption type="Комплектация" option="стандартная" />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <CartDetailOption type="Подарочная упаковка" color="red" />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <CartDetailOption type="Гарантия" option="1 год" />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <CartDetailOption type="Тип покрышки" option="шоссейная" />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <CartDetailOption type="Доп.услуги" option="гидроизоляция" />
          </div>
        </div>
      </div>

      <hr className="my-[40px]" />
    </div>
  );
};

export default CartItem;
