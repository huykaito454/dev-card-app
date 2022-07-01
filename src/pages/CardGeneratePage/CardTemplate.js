import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import DevCard from "../../components/DevCard/DevCard";
const CardTemplate = () => {
  return (
    <div className="w-[50%] bg-black flex items-center justify-center select-none">
      <div className="w-[50%] flex items-center justify-center mt-20">
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <DevCard height={500}></DevCard>
          </SwiperSlide>
          <SwiperSlide>
            <DevCard height={500}></DevCard>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CardTemplate;
