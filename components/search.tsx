import { CaretDownOutlined, SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

const Search = () => {
  return (
    <div className="border-2 flex border-base space-x-5 relative rounded-md w-full">
      <Button
        className="!py-4 !hover:border-none !hover:outline-none !m-1"
        style={{
          fontSize: "15px",
          background: "#F4F7FB",
          color: "black",
          border: "none",
        }}
      >
        Везде
        <CaretDownOutlined />
      </Button>
      <input
        type="text"
        placeholder="Искать самокат KUGO"
        className="outline-none w-full px-2"
      />
      <span className="inline-block absolute right-0 h-full bg-base text-white  cursor-pointer px-3">
        <div className=" h-full flex justify-center">
          <SearchOutlined style={{ fontSize: "20px" }} />
        </div>
      </span>
    </div>
  );
};

export default Search;
