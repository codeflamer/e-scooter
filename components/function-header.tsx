"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Badge, Button } from "antd";
import {
  AlignRightOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import Search from "./search";
import Link from "next/link";
import { useProductCart } from "@/app/cart/carts.store";

const FunctionHeader = () => {
  const cartItems = useProductCart((state) => state.cartItems);

  return (
    <div className="flex justify-between items-center p-5 space-x-10">
      <Link href="/">
        <span className="text-[25px] font-bold">KUGOO</span>
      </Link>

      <div className="space-x-4 sm:flex-row  flex-1 items-center hidden sm:flex">
        <Button
          className="!py-5 !hover:border-none !hover:outline-none"
          style={{ fontSize: "18px", background: "#6F73EE", color: "white" }}
        >
          <AlignRightOutlined />
          Каталог
        </Button>
        <div className="w-full ">
          <Search />
        </div>
      </div>
      <div>
        <ul className="flex space-x-9 items-center">
          <li className="w-[25px] h-[25px]">
            <img
              alt="example"
              src="/icons/Scale.svg"
              className="w-[25px] h-[25px] cursor-pointer"
            />
          </li>
          <li>
            <HeartOutlined
              className="cursor-pointer"
              style={{ fontSize: "20px", color: "black" }}
            />
          </li>
          <li className="space-x-1">
            <Link href="/cart" className="flex space-x-1 items-center">
              <Badge
                count={cartItems.length}
                offset={[0, 20]}
                size="small"
                showZero
              >
                <ShoppingCartOutlined
                  className="cursor-pointer"
                  style={{ fontSize: "20px", color: "black" }}
                />
              </Badge>
              <span className="text-[18px] hidden md:flex"> Корзина</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FunctionHeader;
