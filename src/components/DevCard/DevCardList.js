import React from "react";
import "swiper/scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import DevCard from "./DevCard";
const DevCardList = () => {
  return (
    <div className="cursor-pointer dev-list select-none">
      <Swiper
        grabCursor={"true"}
        spaceBetween={40}
        slidesPerView={"auto"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <DevCard></DevCard>
        </SwiperSlide>
        <SwiperSlide>
          <DevCard></DevCard>
        </SwiperSlide>
        <SwiperSlide>
          <DevCard></DevCard>
        </SwiperSlide>
        <SwiperSlide>
          <DevCard></DevCard>
        </SwiperSlide>
        <SwiperSlide>
          <DevCard></DevCard>
        </SwiperSlide>
        <SwiperSlide>
          <DevCard></DevCard>
        </SwiperSlide>
        <SwiperSlide>
          <DevCard></DevCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DevCardList;
