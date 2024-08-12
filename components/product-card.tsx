"use client";
import { useProductCart } from "@/app/cart/carts.store";
/* eslint-disable @next/next/no-img-element */
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductCard = ({
  id,
  type,
  product,
}: {
  id: number;
  type: "hot" | "new";
  product: ProductType;
}) => {
  const cartItems = useProductCart((state) => state.cartItems);
  const addItem = useProductCart((state) => state.addItemToCart);

  // console.log(cartItems);

  return (
    // <Link href={`/${id}/scooter`}>
    <Card
      hoverable
      // style={{ width: 300 }}
      className="w-full"
      cover={
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <Image
              alt="example"
              src={product.image}
              height="200"
              width="200"
              loading="lazy"
              className="w-full h-[200px] max-w-[200px] mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="example"
              src={product.image}
              height="200"
              width="200"
              loading="lazy"
              className="w-full h-[200px] max-w-[200px] mx-auto"
            />
          </SwiperSlide>
        </Swiper>
      }
    >
      <div className="absolute top-2 w-full left-0 z-10">
        <div className="flex items-center justify-between px-3">
          <div
            className={clsx(
              "text-center text-white rounded-md py-1 px-2 text-[14px] w-[62px]",
              type == "hot" && " bg-[#EE685F]",
              type == "new" && " bg-[#75D14A]"
            )}
          >
            ХИТ
          </div>
          <div className="bg-white/50 px-2 py-2 rounded-full">
            <img
              alt="example"
              src="/icons/Scale.svg"
              className="w-[25px] h-[25px]"
            />
          </div>
        </div>
      </div>
      <h4 className="text-[18px] font-semibold truncate">{product.title}</h4>
      <div className="space-y-3 mt-5">
        <ul className="flex items-center justify-between">
          <li className="flex items-center space-x-2">
            <img
              alt="example"
              src="/icons/Battery.svg"
              className="w-[20px] h-[20px]"
            />
            <span>200 mAh</span>
          </li>
          <li className="flex items-center">
            <img
              alt="example"
              src="/icons/Power.svg"
              className="w-[20px] h-[20px]"
            />
            <span>1,2 л.с.</span>
          </li>
        </ul>
        <ul className="flex items-center justify-between">
          <li className="flex items-center space-x-2">
            <img alt="example" src="/icons/Speedometer.svg" />{" "}
            <span>60 км/ч</span>
          </li>
          <li className="flex items-center space-x-1">
            <img alt="example" src="/icons/Timer.svg" />
            <span>5 часов</span>
          </li>
        </ul>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <p className="flex flex-col">
          <span className="text-[#5D6C7B] line-through block">39 900 ₽</span>
          <span className="block text-[20px] font-semibold">
            {product.price} ₽
          </span>
        </p>
        <ul className="flex space-x-3 text-[20px] text-base">
          <li className="border px-3 py-2 rounded-full">
            <ShoppingCartOutlined onClick={() => addItem(product)} />
          </li>
          <li className="border px-3 py-2 rounded-full">
            <HeartOutlined />
          </li>
        </ul>
      </div>
      <Button
        htmlType="button"
        className="!bg-base !border-none !text-base !py-6 !px-4 mt-[20px] !text-white !text-[14px] !w-full"
      >
        Купить в 1 клик
      </Button>
    </Card>
    // </Link>
  );
};

export default ProductCard;
