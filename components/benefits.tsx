import Image from "next/image";
import React from "react";

const Benefits = () => {
  return (
    <section className="text-base-black ">
      <div className="flex justify-between p-5 max-w-screen-2xl mx-auto items-center flex-col lg:flex-row space-y-5 lg:space-y-0">
        <div className="text-center">
          <h3 className="uppercase text-[20px] md:text-[25px] font-semibold">
            Гарантия 1 год
          </h3>
          <span>на весь ассортимент</span>
        </div>
        <div className="text-center">
          <h3 className="uppercase text-[20px] md:text-[25px] font-semibold">
            рассрочка
          </h3>{" "}
          Подарки
          <span>от 6 месяцев</span>
        </div>
        <div className="text-center">
          <h3 className="uppercase text-[20px] md:text-[25px] font-semibold">
            Подарки
          </h3>
          <span>и бонусам к покупкам </span>
        </div>
        <div className="flex justify-center items-center space-x-6 border p-2 rounded-md backdrop-blur-lg bg-white/40 hover:cursor-pointer">
          <div className="text-center bg-[#FC3F1D] text-white mx-auto rounded-md px-5">
            <Image
              className="mx-auto py-[14px]"
              src="/icons/Glyph.svg"
              height="19"
              width="25"
              alt="yandex"
            />
          </div>
          <div>
            <span className="text-[#5D6C7B]">Яндекс отзывы</span>
            <p className="flex items-center">
              <span>
                <Image
                  className=""
                  src="/icons/Star.svg"
                  height="19"
                  width="19"
                  alt="yandex"
                />
              </span>
              <span className="text-[26px] font-semibold">4,9</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
