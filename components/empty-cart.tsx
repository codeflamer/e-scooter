import { Button, Empty, Typography } from "antd";
import React from "react";

const EmptyCart = () => {
  return (
    <div className="bg-[#F4F7FB] mx-auto py-[45px] rounded-lg">
      <Empty
        image="/icons/Empty.svg"
        imageStyle={{
          height: 80,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        description={
          <Typography.Text>
            <h2 className="">Ваша корзина пуста</h2>
            <p className="text-[15px]">Добавьте в нее товары из каталога</p>
          </Typography.Text>
        }
      >
        <Button
          htmlType="button"
          className="!bg-base !border-none !text-base !py-6 !px-4 mt-[20px] !text-white !text-[14px] "
        >
          Перейти в каталог
        </Button>
      </Empty>
    </div>
  );
};

export default EmptyCart;
