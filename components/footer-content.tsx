import Image from "next/image";
import React from "react";

const FooterContent = () => {
  return (
    <footer className="p-5 max-w-screen-2xl mx-auto">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex justify-between space-x-4 mt-[25px]">
          <div>
            <h4 className="font-semibold text-[18px]">Каталог товаров</h4>
            <ul className="text-[#5D6C7B] text-[14px] space-y-3 mt-[17px]">
              <li className="cursor-pointer">Электросамокаты</li>
              <li className="cursor-pointer">Электроскутеры</li>
              <li className="cursor-pointer">Электровелосипеды</li>
              <li className="cursor-pointer">Электровелосипеды</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[18px]">Покупателям</h4>
            <div className="flex justify-between space-x-6">
              <ul className="text-[#5D6C7B] text-[14px] space-y-3 mt-[17px] ">
                <li className="cursor-pointer">Сервисный центр</li>
                <li className="cursor-pointer">Доставка и оплата</li>
                <li className="cursor-pointer">Рассрочка</li>
                <li className="cursor-pointer">Тест-драйв</li>
              </ul>
              <ul className="text-[#5D6C7B] text-[14px] space-y-3 mt-4">
                <li className="cursor-pointer">Блог</li>
                <li className="cursor-pointer">Сотрудничество</li>
                <li className="cursor-pointer">Контакты</li>
                <li className="cursor-pointer">Акции</li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-[18px]">Контакты</h4>
            <div className="flex mt-[14px] space-x-4 justify-between">
              <section className="space-y-2">
                <span className="text-[12px]">Call-центр</span>
                <p className="text-[16px] font-semibold hover:underline cursor-pointer">
                  +7 (800) 505-54-61
                </p>
                <p className="text-[12px] text-[#5D6C7B]">
                  Пн-Вс 10:00 - 20:00
                </p>
              </section>
              <section className="space-y-2">
                <span className="text-[12px]">Сервисный центр</span>
                <p className="text-[16px] font-semibold hover:underline cursor-pointer">
                  +7 (499) 350-76-92
                </p>
                <p className="text-[12px] text-[#5D6C7B]">
                  Пн-Вс 10:00 - 20:00
                </p>
              </section>
            </div>
          </div>
          <span className="text-base cursor-pointer hover:underline hidden md:flex">
            Заказать звонок
          </span>
        </div>
        <hr className="mt-[115px]" />

        <div className="flex space-x-[70px] mt-[36px]">
          <span className="text-[25px] font-bold text-[#282739]">KUGOO</span>
          <div className="flex space-x-4">
            <div className="bg-white rounded-md flex items-center space-x-3 p-3 max-w-[200px] cursor-pointer hover:scale-105 transition-all">
              <span>Icon</span>
              <div className="flex flex-col">
                <span className="text-[12px] inline-block">Доступно на</span>
                <span className="font-bold text-[20px] inline-block">
                  Google Play
                </span>
              </div>
            </div>
            {/* Apple Icon  */}
            <div className="bg-white rounded-md flex items-center space-x-3 p-3 max-w-[200px] cursor-pointer hover:scale-105 transition-all">
              <span>
                <Image
                  src="/icons/AppleIcon.svg"
                  height="25"
                  width="25"
                  alt="apple-icon"
                />
              </span>
              <div className="flex flex-col">
                <span className="text-[12px] inline-block">Загрузите в</span>
                <span className="font-bold text-[20px] inline-block">
                  Apple Store
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterContent;
