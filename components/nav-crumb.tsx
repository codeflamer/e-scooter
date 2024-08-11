import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import React from "react";

const NavCrumb = () => {
  return (
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
          title: "Моя Коризна",
          className: "!cursor-pointer",
        },
      ]}
    />
  );
};

export default NavCrumb;
