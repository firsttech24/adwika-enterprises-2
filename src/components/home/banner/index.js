"use client";

import "./banner.scss";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import bannerImg from "@/../public/home/banner.jpg";
import bannerTablet from "@/../public/home/banner-tablet.jpg";
import bannerMobile from "@/../public/home/banner-mobile.jpg";

const sliderData = [
  {
    heading: "Welcome To Adwika Enterprises",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as",
    redirectRoute: "/about",
  },
  {
    heading: "Welcome To Adwika Enterprises",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as",
    redirectRoute: "/about",
  },
  {
    heading: "Welcome To Adwika Enterprises",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as",
    redirectRoute: "/about",
  },
  {
    heading: "Welcome To Adwika Enterprises",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as",
    redirectRoute: "/about",
  },
];

export default function Banner() {
  const isTablet = useMediaQuery({
    query: "(min-width: 481px) and (max-width: 1024px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

  return (
    <div className="Banner position-relative d-flex justify-content-center">
      <Image
        src={isTablet ? bannerTablet : isMobile ? bannerMobile : bannerImg}
        alt="adwika enterprises"
        className="img-fluid w-100"
      />

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="swiper position-absolute"
      >
        {sliderData?.map((slider, idx) => (
          <SwiperSlide key={idx} className="w-100">
            <div className="sliderContent d-flex flex-column gap-3 border p-3 p-md-4 p-lg-5  rounded">
              <h1 className="fs-1 fw-bold text-center">{slider?.heading}</h1>
              <p className="fs-5 text-center">{slider?.description}</p>
            </div>

            <button className="btn btn-light fs-4 py-2 py-md-3 px-5  mt-5 d-block m-auto">
              Read More
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
