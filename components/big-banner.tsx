import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Image from "next/image";
import React from "react";

const BigBanner = () => {
  return (
    <section className="bg-radial-banner px-5 md:px-5 mx-5 rounded-lg">
      <div className="rounded-lg text-white flex justify-between max-w-screen-2xl mx-auto space-x-6 relative">
        <div className="py-[50px] max-w-screen-2xl z-[99]">
          <div className="">
            <div className="border text-white text-center border-white py-1 px-1 w-[100px] rounded-lg">
              Новинка
            </div>
            <h3 className="text-[35px] font-semibold max-w-[550px] mt-[40px] ">
              Электросамокаты Kugoo Kirin от официального дилера
            </h3>
            <span className="text-[19px] mt-[20px] inline-block">
              с бесплатной доставкой по РФ от 1 дня
            </span>
          </div>
          <Button
            htmlType="submit"
            className="!bg-white !border-none !text-base !py-7 !font-semibold !px-4 mt-[34px]"
          >
            Перейти в католог
          </Button>
          <div className="mt-[46px] text-[25px]">
            <div className="flex space-x-4 items-center">
              <LeftCircleOutlined className="cursor-pointer !text-[35px]" />
              <span>1</span>
              <div className="w-[50px] bg-white/40 h-[5px] rounded-full">
                <div className="w-[20px] h-full bg-white rounded-full"></div>
              </div>
              <span>5</span>
              <RightCircleOutlined className="cursor-pointer !text-[35px]" />
            </div>
          </div>
        </div>
        <div className="relative ">
          {/* right side */}
          <div className=" absolute right-0 bottom-0 w-[600px] h-[450px]">
            <div className="relative z-50">
              <div className="absolute hidden lg:block bottom-[-340px] left-[-200px] border border-white/30 py-[13px] text-center px-[13px] backdrop-blur-md bg-white/20 w-[250px] rounded-lg">
                <span className="flex items-center justify-center space-x-2 ">
                  <Image
                    src="/images/light.png"
                    alt="text-drive"
                    height="22"
                    width="22"
                  />
                  <p>Тест-драйв и обучение</p>
                </span>
                <div className=" absolute right-[20px] bg-white text-base rounded-md py-1 text-center w-[110px]">
                  Бесплатно
                </div>
                <div className="absolute right-[-120px] top-[20px] w-[130px] rotate-[5deg]">
                  <div className="flex items-center justify-center ">
                    <div className="w-[26px] h-[26px] bg-white flex flex-col justify-center items-center rounded-full">
                      <div className="w-[16px] h-[16px] bg-base rounded-full"></div>
                    </div>
                    <div className="flex-grow border-t-2 border-dotted border-white"></div>
                    <div className="w-[26px] h-[26px] bg-white flex flex-col justify-center items-center rounded-full">
                      <div className="w-[16px] h-[16px] bg-base rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-full z-40">
              <div className="z-10 h-full">
                <Image
                  src="/images/big-scotter.png"
                  alt="text-drive"
                  height="400"
                  width="400"
                  className=" h-full w-full"
                />
              </div>
            </div>
          </div>
          {/* left side */}
        </div>
        <div className="absolute bottom-0 z-0 right-0 w-[900px]">
          <Image
            src="/images/kirin.png"
            alt="text-drive"
            height="400"
            width="900"
          />
        </div>
      </div>
    </section>
  );
};

export default BigBanner;
