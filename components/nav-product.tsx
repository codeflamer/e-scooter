"use client";
import { useProduct } from "@/hooks/query-hooks";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import React from "react";

const NavProduct = ({ productId }: { productId: number }) => {
  const { product, isLoading } = useProduct(productId);
  return (
    <div>
      <Breadcrumb
        items={[
          {
            href: "/",
            title: (
              <>
                <HomeOutlined />
                <span>Главная</span>
              </>
            ),
          },
          {
            href: "",
            title: (
              <>
                <span>Каталог</span>
              </>
            ),
          },
          {
            title: "Электросамокаты",
            className: "!cursor-pointer",
          },
          {
            title: product?.title,
            className: "!cursor-pointer",
          },
        ]}
      />
    </div>
  );
};

export default NavProduct;
