import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import React from "react";

const NavProduct = () => {
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
            title: "Kugoo Kirin M4",
            className: "!cursor-pointer",
          },
        ]}
      />
    </div>
  );
};

export default NavProduct;
