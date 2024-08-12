"use client";
import { Button } from "antd";
import ProductCard from "./product-card";
import { useProducts } from "@/hooks/query-hooks";
import { Fragment } from "react";

const DisplayGoods = () => {
  const { products, isLoading } = useProducts();

  console.log(products);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <div className="p-5 max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-center space-x-10 flex-col lg:flex-row space-y-3 lg:space-y-0">
          <h2 className="font-semibold text-[35px] uppercase">
            Электросамокаты
          </h2>
          <div className="text-base space-x-4">
            <Button
              htmlType="button"
              className="!bg-white !text-base !py-5 !font-semibold !px-4 !border !border-base !text-[14px]"
            >
              Хиты продаж
            </Button>
            <Button
              htmlType="button"
              className="!bg-[#F4F7FB] !text-[#5D6C7B] !py-5 !font-semibold !px-4 !border-none !text-[14px]"
            >
              Для города
            </Button>
            <Button
              htmlType="button"
              className="!bg-[#F4F7FB] !text-[#5D6C7B] !py-5 !font-semibold !px-4 !border-none !text-[14px]"
            >
              Для взрослых
            </Button>
            <Button
              htmlType="button"
              className="!bg-[#F4F7FB] !text-[#5D6C7B] !py-5 !font-semibold !px-4 !border-none !text-[14px] mt-4 md:mt-0"
            >
              Для взрослых
            </Button>
          </div>
        </div>
        {/* The bottom part */}
        <div className="relative mt-[40px] flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 w-full">
            {products!.length > 0 &&
              products!.map((product, index) => (
                <Fragment key={product.id}>
                  <ProductCard
                    id={product.id}
                    type={
                      ["hot", "new"][Math.floor(index + 1) % 2] as "hot" | "new"
                    }
                    title={product.title}
                    image={product.image}
                    price={product.price}
                  />
                </Fragment>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisplayGoods;
