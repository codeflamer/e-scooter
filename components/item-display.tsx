/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";

const ItemDisplay = ({ product }: { product: ProductType }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  return (
    <section className=" mx-auto">
      <div className="md:w-[570px] relative w-[280px] sm:w-[320px] mx-auto">
        <Swiper
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 md:h-[426px] rounded-md "
        >
          {/* <SwiperSlide>
            <img
              alt="here"
              src=""
              className="w-[570px] h-[426px]"
            />
          </SwiperSlide> */}
          {product.images?.map((image, key) => (
            <SwiperSlide key={key}>
              <img
                alt="here"
                src={image}
                className="md:w-[570px] md:h-[426px]"
              />
            </SwiperSlide>
          ))}
          {/* <SwiperSlide>
            <img
              alt="here"
              src="/images/clear-scooter.jpg"
              className="w-[570px] h-[426px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="here"
              src="/images/test-1.jpg"
              className="w-[570px] h-[426px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="here"
              src="/images/test-3.jpg"
              className="w-[570px] h-[426px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="here"
              src="/images/test-4.jpg"
              className="w-[570px] h-[426px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="here"
              src="/images/test-5.jpg"
              className="w-[570px] h-[426px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="here"
              src="/images/test-6.jpg"
              className="w-[570px] h-[426px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="here"
              src="/images/test-7.jpg"
              className="w-[570px] h-[426px]"
            />
          </SwiperSlide> */}
        </Swiper>
        <div>
          <div className="absolute top-[15px] left-[10px] bg-[#75D14A] text-white text-center text-[12px] py-1 px-1 w-[110px] rounded-lg z-10">
            Новинка 2024
          </div>
        </div>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={6}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper mt-3"
        >
          {/* <SwiperSlide>
            <img
              alt="here"
              src={product.image}
              className="h-[73px] rounded-lg hover:cursor-pointer"
            />
          </SwiperSlide> */}
          {product.images?.map((image, key) => (
            <SwiperSlide key={key}>
              <img
                alt="here"
                src={image}
                className="h-[50px] md:h-[73px] rounded-lg hover:cursor-pointer"
              />
            </SwiperSlide>
          ))}
          {/* <SwiperSlide>
            <img
              alt="here"
              src="/images/clear-scooter.jpg"
              className="h-[73px] rounded-lg hover:cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="here"
              src="/images/test-1.jpg"
              className="h-[73px] w-[73px] rounded-lg hover:cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="here"
              src="/images/test-3.jpg"
              className="h-[73px] w-[73px] rounded-lg hover:cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="here"
              src="/images/test-4.jpg"
              className="h-[73px] w-[73px] rounded-lg hover:cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="here"
              src="/images/test-5.jpg"
              className="h-[73px] w-[73px] rounded-lg hover:cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="here"
              src="/images/test-6.jpg"
              className="h-[73px] w-[73px] rounded-lg hover:cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="here"
              src="/images/test-7.jpg"
              className="h-[73px] w-[73px] rounded-lg hover:cursor-pointer"
            />
          </SwiperSlide> */}
        </Swiper>
      </div>
    </section>
  );
};

export default ItemDisplay;
