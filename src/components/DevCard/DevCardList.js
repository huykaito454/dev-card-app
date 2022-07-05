import React, { useEffect, useState } from "react";
import "swiper/scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import DevCard from "./DevCard";
import { getDataNoJWT } from "../../actions/httpHandle";
import { Buffer } from "buffer";
const DevCardList = () => {
  const [card, setCard] = useState([]);
  const handleGetData = async () => {
    const data = await getDataNoJWT("get-all-cards");
    const newData = handleBase64(data.data.data);
    console.log(newData);
    setCard(newData);
  };
  const handleBase64 = (data) => {
    for (var k in data) {
      data[k].image = new Buffer(data[k].image, "base64").toString("binary");
    }
    return data;
  };
  useEffect(() => {
    handleGetData();
  }, []);
  return (
    <div className="cursor-pointer dev-list select-none mb-10 w-full">
      <Swiper
        grabCursor={"true"}
        spaceBetween={100}
        slidesPerView={"auto"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {card.length > 0 &&
          card.map((item) => (
            <SwiperSlide key={item.id}>
              <DevCard item={item}></DevCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default DevCardList;
