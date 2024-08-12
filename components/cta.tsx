import { Button } from "antd";
import React from "react";

const CTA = () => {
  return (
    <div className="p-5 md:flex md:flex-row items-center justify-between max-w-screen-2xl mx-auto md:space-x-10 flex-col">
      <p className="text-bold uppercase text-[16px] md:text-[18px] max-w-[600px]">
        Оставьте свою почту и станьте первым, кто получит скидку на новые
        самокаты
      </p>

      <form className="flex flex-col md:flex-row md:space-x-3 flex-1 md:justify-end mt-4 md:mt-0 ">
        <label className="hidden" htmlFor="email">
          Whatever
        </label>
        <input
          type="email"
          id="email"
          title="email"
          className="outline-none placeholder:text-white text-[14px] px-4 rounded-md backdrop-blur-md
bg-white/30 w-full min-w-[300px] md:max-w-[600px] mr-3 py-4"
          required
          placeholder="Введите Ваш email"
          aria-required
        />
        <Button
          htmlType="submit"
          className="!bg-white !border-none !text-base !py-5 sm:!py-7 !font-semibold !px-4 mt-3 md:mt-0"
        >
          Подписаться
        </Button>
      </form>
    </div>
  );
};

export default CTA;
