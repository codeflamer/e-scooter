import React from "react";

const NavigationTabs = () => {
  return (
    <div className="text-[14px] md:text-[16px] bg-[#F4F7FB] py-5 font-bold ">
      <ul className="flex space-x-10 no-wrap px-5 max-w-screen-2xl mx-auto">
        <li className="text-center">О магазине</li>
        <li className="flex flex-col text-center space-y-2 md:space-y-0 md:flex-row md:space-x-2">
          <span>Доставка и оплата </span>
          <span className="bg-base text-white px-2 py-1 rounded-xl text-[14px] font-normal">
            Доступна рассрочка
          </span>
        </li>
        <li className="text-center">Тест-драйв</li>
        <li>Блог</li>
        <li>Контакты</li>
        <li className="whitespace-nowrap">
          Акции{" "}
          <span className="text-bold bg-base text-white px-1 py-1 md:px-2 md:py-2 rounded-full text-[14px] font-normal">
            %
          </span>
        </li>
      </ul>
    </div>
  );
};

export default NavigationTabs;
