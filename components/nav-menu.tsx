import { PlusCircleOutlined } from "@ant-design/icons";
import Image from "next/image";
import React from "react";

const NavMenu = () => {
  return (
    <nav className="flex justify-between p-5 items-center space-x-3">
      <section className="flex items-center space-x-7">
        <div className="w-[60px] ">
          <Image
            src="/logo/service.svg"
            alt="service"
            width="60"
            height="25"
            className="cursor-pointer"
          />
        </div>
        <div className="text-[#5D6C7B] cursor-pointer">Сотрудничество</div>
        <div className="text-[#5D6C7B] cursor-pointer">Заказать звонок</div>
        <ul className="flex space-x-4">
          <li className="w-[25px] h-[25px]">
            <Image
              src="/logo/viber 1.svg"
              alt="service"
              width="20"
              height="12"
              className="cursor-pointer"
            />
          </li>
          <li className="w-[25px] h-[25px]">
            <Image
              src="/logo/whatsapp.svg"
              alt="service"
              width="20"
              height="12"
              className="cursor-pointer"
            />
          </li>
          <li className="w-[25px] h-[25px]">
            <Image
              src="/logo/telegram.svg"
              alt="service"
              width="20"
              height="12"
              className="cursor-pointer"
            />
          </li>
        </ul>
      </section>

      <div className="flex space-x-4">
        <span>+7 (800) 505-54-61</span>
        <p>
          <PlusCircleOutlined
            className="cursor-pointer"
            style={{ fontSize: "20px", color: "#5D6C7B" }}
          />
        </p>
      </div>
    </nav>
  );
};

export default NavMenu;
