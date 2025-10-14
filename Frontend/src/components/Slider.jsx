import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Slider() {
  const images = [
    "https://picsum.photos/id/1015/600/200",
    "https://picsum.photos/id/1025/600/200",
    "https://picsum.photos/id/1035/600/200",
    "https://picsum.photos/id/1045/600/200",
  ];

  return (
    <div className="w-full flex justify-center pb-28 mt-10">
      <div className="w-[90%] max-w-md">
        {/* Slider container */}
        <div className="relative">
          <Swiper
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            modules={[Pagination, Autoplay]}
            className="rounded-xl overflow-hidden"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-32 object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination dots below the slider */}
          <div className="custom-pagination flex justify-center mt-3 space-x-2"></div>
        </div>
      </div>
    </div>
  );
}
