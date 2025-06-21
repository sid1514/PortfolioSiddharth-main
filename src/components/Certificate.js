import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
const Certificate = ({ CertificateRef }) => {
  const certificates = [
    "certificate image/imarticus_fsd.png",
    "certificate image/Metainnovix_intern.png",
    "certificate image/Javainter.jpg",
    "certificate image/javascript_inter.jpg",
    "certificate image/php.jpg",
    "certificate image/SQL.jpg",
    "certificate image/pythonDS.jpg",
    "certificate image/speedCodeEvent.jpg",
  ];
  return (
    <div
      className="m-[20%] flex flex-col justify-center text-center pt-16"
      ref={CertificateRef}
    >
      <h3 className="text-2xl font-mono underline underline-offset-4">
        Certifiactes & Achievements
      </h3>
      <div className=" ">
        <Swiper
          spaceBetween={20}
          slidesPerView={"auto"}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          effect={"coverflow"}
          centeredSlides={true}
          
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Autoplay, Pagination]}
        >
          {certificates.map((c) => (
          <SwiperSlide className="p-6 ">
              <img
                src={`${c}`}
                className="m-auto shadow-lg shadow-neutral-800"
                width={500}
              />
            </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Certificate;
