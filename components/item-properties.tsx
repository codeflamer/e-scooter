/* eslint-disable @next/next/no-img-element */
import {
  HeartOutlined,
  QuestionCircleOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import clsx from "clsx";
import React from "react";

const ItemProperties = ({ product }: { product: ProductType }) => {
  return (
    <div className="text-base-black flex-1">
      <div>
        <h2 className="font-semibold text-[25px] md:text-[35px]">
          {product.title}
        </h2>
        <ul className="text-[12px] flex space-x-7 text-[#5D6C7B]">
          <li>Просмотров 350</li>
          <li>Купили 196 раз</li>
          <li>Артикул: 2200000000026</li>
        </ul>
      </div>
      <div className="mt-[20px]">
        <ul className="flex items-center flex-wrap">
          <li className="flex flex-1 items-center space-x-1 mr-4">
            <span className="block w-2 h-2 bg-[#75D14A] rounded-full mr-1"></span>
            <span className="whitespace-nowrap"> В наличии</span>
          </li>
          <li className="flex flex-1 space-x-2 items-center">
            {" "}
            <img
              alt="example"
              src="/icons/Scale.svg"
              className="w-[20px] h-[20px]"
            />
            <span> Сравнить</span>
          </li>
          <li className="flex space-x-2 items-center">
            <ShareAltOutlined className="!text-[20px]" />
            <span>Поделиться</span>
          </li>
        </ul>
      </div>

      <div className="flex justify-between items-center space-x-5 mt-[32px]">
        <div>
          <span className="block line-through text-[#5D6C7B] text-[14px] sm:text-[16px]">
            39 900 ₽
          </span>
          <span className="text-[18px] sm:text-[25px] font-semibold">
            {product.price} ₽
          </span>
        </div>
        <div className="bg-[#F4F7FB] py-[7px] px-[14px] flex justify-between space-x-5 items-center rounded-lg">
          <p>
            <img
              alt="example"
              src="/icons/Card.svg"
              className="w-[25px] h-[25px]"
            />
          </p>
          <p>
            <span className="text-[#5D6C7B] block">Рассрочка:</span>
            <span className="text-[14px] font-semibold">
              1 760 ₽ в месяц / 24 месяца
            </span>
          </p>
        </div>
      </div>
      <div className="mt-[30px]">
        <h5 className="mb-[20px] flex items-center space-x-1">
          <span className="font-semibold">Комплектация</span>{" "}
          <QuestionCircleOutlined />
        </h5>
        <div className="grid grid-cols-12 gap-5">
          {[
            { name: "Базовая", status: true },
            { name: "Версия MAX", status: false },
            { name: "VIP-версия", status: false },
          ].map((elem, index) => (
            <div
              className={clsx(
                `border-2 py-[28px] rounded-lg px-[28px] text-center col-span-6 cursor-pointer hover:border-base transition-all`,
                elem.status && "border-base"
              )}
              key={index}
            >
              {elem.name}
            </div>
          ))}
        </div>
      </div>
      <hr className="my-[30px]" />
      <div className="space-y-3">
        <h5 className="text-[14px] text-[#5D6C7B]">Покрышки</h5>
        <div className="flex justify-between items-center ">
          <div className="">
            <h6 className="font-semibold text-[20px]">
              Внедорожная шипованная
            </h6>
            <p className="text-[14px]">
              + установка (с доп.комплектом базовых покрышек)
            </p>
          </div>
          <span className="text-base hover:underline cursor-pointer text-[14px] inline-block">
            Изменить
          </span>
        </div>
        <p className="text-[14px]">7600 руб.</p>
      </div>
      <hr className="my-[30px]" />
      <div>
        <h5 className="text-[16px] font-semibold mb-[20px]">Гарантия</h5>
        <div className="grid grid-cols-12 gap-5">
          {[
            { name: "Стандартная 1 год", cost: "Бесплатно", status: false },
            { name: "Расширенная 2 года", cost: "2 990 руб.", status: true },
          ].map((elem, index) => (
            <div
              className={clsx(
                `border-2 py-[28px] rounded-lg px-[28px] text-center col-span-6 cursor-pointer hover:border-base transition-all`,
                elem.status && "border-base"
              )}
              key={index}
            >
              <div className="flex flex-col justify-center items-center space-y-3">
                <span className="text-[18px]">{elem.name}</span>
                <span className="text-[#5D6C7B] text-[14px]">{elem.cost}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="my-[30px]" />
      <div>
        <h5 className="text-[16px] font-semibold mb-[20px]">
          Дополнительные услуги
        </h5>
        <div className="grid grid-cols-12 gap-5">
          {[
            { name: "Нет", cost: "", status: false },
            { name: "Настройка", cost: "1 520 руб.", status: true },
            { name: "Гидроизоляция", cost: "23 850 руб.", status: false },
            {
              name: "Гидроизоляция и настройка",
              cost: "3 409 руб. (-30%)",
              status: false,
            },
          ].map((elem, index) => (
            <div
              className={clsx(
                `border-2 py-[28px] rounded-lg px-[28px] text-center col-span-6 cursor-pointer hover:border-base transition-all`,
                elem.status && "border-base"
              )}
              key={index}
            >
              <div className="flex flex-col justify-center items-center space-y-3">
                <span className="text-[18px]">{elem.name}</span>
                <span className="text-[#5D6C7B] text-[14px]">{elem.cost}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="my-[30px]" />
      <div>
        <div className="flex justify-between mb-[20px]">
          <h5 className="text-[16px] font-semibold">Подарочная упаковка</h5>
          <p className="flex items-center space-x-1">
            <span className="text-[14px] text-[#5D6C7B]">До конца акции: </span>
            <span>06:34:23:02</span>
          </p>
        </div>
        <div className="bg-[#F4F7FB] px-[20px] py-[20px] rounded-lg">
          <h5 className="text-[18px] font-semibold mb-[23px]">
            2 подарка при покупке
          </h5>
          <div className="flex flex-col sm:flex-row items-center justify-between sm:space-x-4 space-y-4 sm:space-y-0">
            <div className="flex items-center justify-between space-x-4">
              <img
                alt="example"
                src="/icons/Holder.svg"
                className="w-[48px] h-[48px]"
              />
              <p className="text-[12px] max-w-[166px]">
                Книга «6 вопросов об электротранспорте, на которые вы должны
                знать ответ».
              </p>
            </div>
            <div className="flex items-center justify-between space-x-4">
              <img
                alt="example"
                src="/icons/Electrify.svg"
                className="w-[48px] h-[48px]"
              />
              <p className="text-[12px] max-w-[166px]">
                Универсальный держатель для телефона{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[30px]">
        <div className="grid grid-cols-12 gap-5">
          {[
            { name: "Без упаковки", color: "", status: false },
            { name: "Розовый", color: "rose", status: true },
            { name: "Синий", color: "blue", status: false },
            { name: "Красный", color: "red", status: false },
          ].map((elem, index) => (
            <div
              className={clsx(
                `border-2 py-[28px] rounded-lg px-[28px] text-center col-span-6 cursor-pointer hover:border-base transition-all`,
                elem.status && "border-base"
              )}
              key={index}
            >
              <div className="flex flex-col justify-center items-center space-y-3">
                {!!elem.color && (
                  <span
                    className={clsx(
                      `text-[#5D6C7B] text-[14px] w-[45px] h-[45px] rounded-full`,
                      elem.color === "rose" && "bg-[#FA6BFD]",
                      elem.color === "blue" && "bg-base",
                      elem.color === "red" && "bg-[#F45A5A]"
                    )}
                  ></span>
                )}
                <span className="text-[18px]">{elem.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-[30px] py-[27px] bg-[#F4F7FB] rounded-lg mt-[30px]">
        <div className="flex items-center justify-between">
          <span className="text-[35px] font-semibold">
            {product.price} руб.
          </span>
          <div className="text-[#6F73EE] text-[20px] border rounded-full w-[40px] h-[40px] flex flex-col items-center justify-center cursor-pointer">
            <HeartOutlined />
          </div>
        </div>
        <hr className="my-[32px]" />
        <div className="flex items-center space-x-5">
          <img
            alt="example"
            src="/icons/delivery.svg"
            className="w-[22] h-[22px] self-start"
          />
          <div>
            <p>
              <span className="font-semibold block">
                Бесплатная доставка по РФ{" "}
              </span>
              <span>от 1 дня при заказе до 01.09</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center md:space-x-6 mt-[30px] space-y-3 md:space-y-0">
          <Button
            htmlType="button"
            className="!bg-base !border-none !border-2 border-base !text-base !py-6 !px-4  !text-white !text-[14px] w-full hover:scale-105"
          >
            Купить в 1 клик
          </Button>
          <Button
            htmlType="button"
            className="!bg-transparent !border-2 !border-base !text-base !py-6 !px-4 !text-[#6F73EE] !text-[14px] w-full hover:scale-105"
          >
            Добавить в корзину
          </Button>
        </div>
        <p className="text-[#6F73EE] text-center mt-[20px] text-[14px] hover:underline cursor-pointer hover:scale-105 transition-scale">
          Хотите купить позже?
        </p>
      </div>
    </div>
  );
};

export default ItemProperties;
