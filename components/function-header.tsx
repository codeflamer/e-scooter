import React from "react";
import { Badge, Button } from "antd";
import {
  AlignRightOutlined,
  CaretDownOutlined,
  HeartOutlined,
  PartitionOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import Search from "./search";
import Link from "next/link";

const FunctionHeader = () => {
  return (
    <div className="flex justify-between items-center p-5 space-x-10">
      <span className="text-[25px] font-bold">KUGOO</span>

      <div className="space-x-4 flex  flex-1 items-center">
        <Button
          className="!py-5 !hover:border-none !hover:outline-none"
          style={{ fontSize: "18px", background: "#6F73EE", color: "white" }}
        >
          <AlignRightOutlined />
          Каталог
        </Button>
        <Search />
      </div>
      <div>
        <ul className="flex space-x-9 items-center">
          <li>
            <PartitionOutlined
              className="cursor-pointer"
              style={{ fontSize: "20px", color: "black" }}
            />
          </li>
          <li>
            <HeartOutlined
              className="cursor-pointer"
              style={{ fontSize: "20px", color: "black" }}
            />
          </li>
          <li className="space-x-1 inline-block">
            <Link href="/cart">
              <Badge count={5} offset={[0, 20]} size="small">
                <ShoppingCartOutlined
                  className="cursor-pointer"
                  style={{ fontSize: "20px", color: "black" }}
                />
              </Badge>
              <span className="text-[18px]"> Корзина</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FunctionHeader;
