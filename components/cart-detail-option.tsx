import { DownOutlined } from "@ant-design/icons";
import React from "react";

const CartDetailOption = ({
  type,
  option,
  color,
}: {
  type: string;
  option?: string;
  color?: "purple" | "red" | "green";
}) => {
  return (
    <div className="">
      <div className="border space-x-2 text-[14px] px-[15px] py-[5px] md:py-[8px] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#F4F7FB]">
        <span className="text-[#5D6C7B]">{type}: </span>
        <span className="text-base-black text-[14px] flex items-center justify-center space-x-2">
          {option && <span>{option}</span>}{" "}
          {color && (
            <span
              className={`inline-block w-[16px] h-[16px] rounded-full bg-[${color}]`}
            ></span>
          )}
          <DownOutlined />
        </span>
      </div>
    </div>
  );
};

export default CartDetailOption;
