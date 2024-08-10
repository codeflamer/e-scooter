import React from "react";

const NavigationTabs = () => {
  return (
    <div className="bg-[#F4F7FB] py-5 font-bold ">
      <ul className="flex space-x-10 no-wrap px-5 max-w-screen-2xl mx-auto">
        <li>О магазине</li>
        <li>
          Доставка и оплата{" "}
          <span className="bg-base whitespace-nowrap text-white px-2 py-1 rounded-xl text-[14px] font-normal">
            Доступна рассрочка
          </span>
        </li>
        <li>Тест-драйв</li>
        <li>Блог</li>
        <li>Контакты</li>
        <li>
          Акции{" "}
          <span className="text-bold bg-base whitespace-nowrap text-white px-2 py-2 rounded-full text-[14px] font-normal">
            %
          </span>
        </li>
      </ul>
    </div>
  );
};

export default NavigationTabs;
