"use client";
import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import ProductCard from "./product-card";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useEffect, useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { useProductLimit } from "@/hooks/query-hooks";

const ItemsRecommendation = () => {
  const { products, isLoading } = useProductLimit();

  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current;

      swiperInstance.on("slideChange", () => {
        const { isEnd, isBeginning } = swiperInstance;
        // Toggle visibility of the next button based on whether we're at the last slide
        const prevButton = document.querySelector(
          ".swiper-button-prev-custom"
        ) as HTMLDivElement;
        if (isBeginning) {
          prevButton.style.display = "none";
        } else {
          prevButton.style.display = "flex";
        }

        const nextButton = document.querySelector(
          ".swiper-button-next-custom"
        ) as HTMLDivElement;
        if (isEnd) {
          nextButton.style.display = "none";
        } else {
          nextButton.style.display = "flex";
        }
      });
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(products);

  return (
    <section>
      <h2 className="mb-[30px] text-[35px] font-semibold">Рекомендуем вам</h2>
      <div className="my-custom-swiper-container relative">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            320: {
              centeredSlides: true,
            },
            640: {
              slidesPerView: 1.5,
            },

            768: {
              slidesPerView: 2.5,
              centeredSlides: false,
            },

            1024: {
              slidesPerView: 3.5,
            },
            1440: {
              slidesPerView: 4.5,
            },
          }}
        >
          <div
            className="swiper-button-prev-custom z-10 shadow-lg absolute top-[220px] left-40 text-white w-[40px] h-[40px] bg-base rounded-full text-[20px] font-semibold flex flex-col items-center justify-center"
            style={{
              boxShadow: "0 10px 15px -3px #6F73EE, 0 4px 6px -2px #6F73EE",
            }}
          >
            <LeftOutlined className="cursor-pointer" />
          </div>
          <div
            style={{
              boxShadow: "0 10px 15px -3px #6F73EE, 0 4px 6px -2px #6F73EE",
            }}
            className="swiper-button-next-custom z-10 shadow-lg absolute top-[220px] right-40 text-white w-[40px] h-[40px] bg-base rounded-full text-[20px] font-semibold flex flex-col items-center justify-center"
          >
            <RightOutlined className="cursor-pointer" />
          </div>

          {products!.length > 0 &&
            products!.map((product, index) => (
              <SwiperSlide key={product.id}>
                <div className="mr-3">
                  <ProductCard
                    id={product.id}
                    type={
                      ["hot", "new"][Math.floor(index + 1) % 2] as "hot" | "new"
                    }
                    title={product.title}
                    image={product.image}
                    price={product.price}
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ItemsRecommendation;
