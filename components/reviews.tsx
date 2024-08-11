import { ArrowRightOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import Image from "next/image";
import React from "react";

const Reviwes = () => {
  return (
    <section>
      <div>
        <div>
          <h2 className="text-[35px] font-semibold text-center">
            Отзывы и фото реальных покупателей
          </h2>
          <p className="text-base text-[14px] text-center">
            Читать отзывы на Яндекс <ArrowRightOutlined />
          </p>
        </div>
        <div className="mt-[50px]">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-2 cursor-pointer">
              <Image
                src="/images/review-1.jpg"
                alt="review"
                height="215"
                width="215"
                className="h-[215px] w-full"
              />
            </div>
            <div className="col-span-2 cursor-pointer">
              <Image
                src="/images/review-2.jpg"
                alt="review"
                height="215"
                width="215"
                className="h-[215px] w-full"
              />
            </div>
            <div className="relative col-span-3 cursor-pointer">
              <Image
                src="/images/review-3.jpg"
                alt="review"
                height="215"
                width="215"
                className="h-[215px] w-full rounded-lg"
              />
              {/* hover content */}
              <div className="absolute bottom-[10px] text-white px-3 max-h-[210px] overflow-hidden">
                <div>
                  <div className="flex items-center space-x-3">
                    <Avatar size={40} icon={<UserOutlined />} />
                    <div className="flex flex-col">
                      <span className="block">Илья М.</span>
                      <span className="text-[12px] block text-white/70">
                        Знаток города 2 уровня
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-3 items-center">
                    <div className="flex space-x-1 py-3">
                      {Array.from({ length: 5 }).map((elem, index) => (
                        <img
                          key={index}
                          src="/icons/Star.svg"
                          alt="star"
                          width="14px"
                          height="14px"
                        />
                      ))}
                    </div>
                    <span className="text-[12px] text-white/70">
                      23 сентября 2020
                    </span>
                  </div>
                </div>
                <p className="text-[12px]">
                  Магазин очень понравился, быстро обслужили, персонал хорошо
                  знает свой товар, вежливо и грамотно консультирует,
                  ассортимент внушительный, а если чего нет сейчас в наличии, то
                  можно без проблем заказать на сайте, так что всем рекомендую!
                </p>
              </div>
            </div>
            <div className="col-span-3 cursor-pointer">
              <Image
                src="/images/review-4.jpg"
                alt="review"
                height="215"
                width="215"
                className="h-[215px] w-full"
              />
            </div>
            <div className="col-span-2 cursor-pointer">
              <Image
                src="/images/review-5.jpg"
                alt="review"
                height="215"
                width="215"
                className="h-[215px] w-full"
              />
            </div>
          </div>

          {/* second row */}
          <div className="grid grid-cols-12 gap-4 mt-4">
            <div className="cursor-pointer -ml-40">
              <Image
                src="/images/review-1.jpg"
                alt="review"
                height="215"
                width="215"
                className="h-[215px] w-full"
              />
            </div>
            <div className="col-span-2 cursor-pointer rounded-lg">
              <Image
                src="/images/review-5.jpg"
                alt="review"
                height="215"
                width="215"
                className="h-[215px] w-full rounded-lg"
              />
            </div>
            <div className="col-span-3 cursor-pointer">
              <Image
                src="/images/review-6.jpg"
                alt="review"
                height="215"
                width="215"
                className="h-[215px] w-full"
              />
            </div>
            <div className="col-span-2 cursor-pointer">
              <Image
                src="/images/review-7.jpg"
                alt="review"
                height="215"
                width="215"
                className="h-[215px] w-full"
              />
            </div>
            <div className="col-span-2 cursor-pointer">
              <Image
                src="/images/review-9.jpg"
                alt="review"
                height="215"
                width="215"
                className="h-[215px] w-full"
              />
            </div>
            <div className="col-span-1 cursor-pointer">
              <Image
                src="/images/review-8.jpg"
                alt="review"
                height="215"
                width="215"
                className="h-[215px] w-full"
              />
            </div>
            <div className="col-span-1 cursor-pointer">
              <Image
                src="/images/review-10.png"
                alt="review"
                height="215"
                width="215"
                className="h-[215px] w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviwes;
