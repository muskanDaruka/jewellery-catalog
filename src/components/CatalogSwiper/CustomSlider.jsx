"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const CustomSlider = ({ images }) => {
  const router = useRouter();
  const handleImageClick = (url) => {
    if (url) {
      router.push(url);
    }
  };
  return (
    <div className="flex justify-center items-center w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} onClick={() => handleImageClick(item.url)} className="flex items-center justify-center">
            <Image
              src={item.image}
              alt={`Slide ${index + 1}`}
              width={500}
              height={500}
              className="w-screen h-screen object-fit"
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomSlider;
