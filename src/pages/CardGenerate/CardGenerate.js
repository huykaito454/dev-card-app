import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import DevCardList from "../../components/DevCard/DevCardList";
import DevCard from "../../components/DevCard/DevCard";

const CardGenerate = () => {
  return (
    <div className="flex items-start justify-center">
      <div className="w-[50%] bg-black flex items-center justify-center  ">
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
      <div className="bg-[#6d1a6a] w-[50%] px-12 ">
        <div className="w-full flex flex-col gap-y-10 mt-[50px] mb-10">
          <div className="w-full flex justify-end gap-x-2">
            <i className="fas fa-share-alt bg-white text-black py-2 px-[9px] rounded-md cursor-pointer button-active"></i>
            <i className="fas fa-download bg-white text-black p-2 rounded-md cursor-pointer button-active"></i>
          </div>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <label htmlFor="">Name</label>
              <input
                type="text"
                className=" bg-[#6d1a6a] outline-none border-b-2 border-slate-300 focus:border-white"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">Avatar</label>
              {/* <input
                type="text"
                readOnly
                className=" bg-[#6d1a6a] outline-none border-b-2 border-slate-300"
              />
              <div className="flex absolute right-0 top-1/3 items-center cursor-pointer">
                <span>Open</span>
                <i className="far fa-folder ml-1 text-xl"></i>
              </div> */}
              <label htmlFor="file-input">
                <input type="file" className="input-file" id="file-input" />
                <div className="flex w-full items-center justify-end cursor-pointer">
                  <span>Open</span>
                  <i className="far fa-folder ml-1 text-xl"></i>
                </div>
                <div className="bg-[#6d1a6a] outline-none border-b-2 border-slate-300"></div>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CardGenerate;
