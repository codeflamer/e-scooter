import { Button } from "antd";
import Image from "next/image";
import React from "react";
// bg-[#595959]

const BannerDelivery = () => {
  return (
    <section className="rounded-lg mx-5 bg-radial-gradient">
      <div className="flex flex-col-reverse md:flex-row max-w-screen-2xl mx-auto">
        {/* left */}
        <div className="flex flex-col">
          <Image src="/images/drone.png" alt="drone" height="600" width="600" />
        </div>
        {/* Right */}
        <div className="flex flex-col space-y-1 py-3 mx-auto justify-center">
          <div className="bg-[#EE685F] text-center text-white rounded-md py-1 px-2 text-[14px] w-[62px]">
            Акция
          </div>
          <div className="text-[25px] lg:text-[30px] font-semibold text-white max-w-[441px]">
            Бесплатная доставка электросамокатов по России до 01.09
          </div>
          <Button
            htmlType="submit"
            className="!bg-white !border-none !text-base-black !py-5 !font-semibold !px-2 w-[108px]"
          >
            Подробнее
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BannerDelivery;
