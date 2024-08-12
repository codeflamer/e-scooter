import { ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";
import React from "react";

const BannerShowCase = () => {
  return (
    <section className="px-5 flex justify-between max-w-screen-2xl mx-auto space-y-5 xl:space-y-0 xl:space-x-5 flex-col xl:flex-row">
      <div className="rounded-lg flex justify-between bg-[#F4F7FB] relative h-[250px]">
        <div className="space-y-4 ml-[40px] w-[400px] flex flex-col justify-center">
          <div className="font-semibold text-[30px]">
            Подбор модели электросамоката
          </div>
          <div className="max-w-[300px]">
            Пройдите тест и выберите электросамокат по своим критериям
          </div>
          <div className="text-base flex space-x-2 cursor-pointer">
            <span className="inline-block">Подобрать модель</span>{" "}
            <ArrowRightOutlined />
          </div>
        </div>
        <div>
          <div className="-z-1 border-base w-40 h-full bg-radial-base rounded-bl-[200px] rounded-md ">
            <Image
              alt="image"
              className="absolute right-0 hidden md:block z-99 "
              height="250"
              width="250"
              src="/images/scotter-banner.png"
            />
          </div>
        </div>
      </div>
      <div className="rounded-lg flex justify-between bg-[#F4F7FB] relative h-[250px]">
        <div className="space-y-4 ml-[40px] w-[400px] flex flex-col justify-center">
          <div className="font-semibold text-[30px]">
            Сервисное обслуживание
          </div>
          <div className="max-w-[300px]">
            Крупнейший сервисный центр в России для продуктов Kugoo
          </div>
          <div className="text-base flex space-x-2 cursor-pointer">
            <span className="inline-block">Подобрать модель</span>{" "}
            <ArrowRightOutlined />
          </div>
        </div>
        <div>
          <div className="-z-1  border-base w-40 h-full bg-radial-base rounded-bl-[200px] rounded-md">
            <Image
              alt="image"
              className="absolute right-0 hidden md:block z-99  w-[250px] h-[250px]"
              height="250"
              width="250"
              src="/images/woman-electric.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerShowCase;
