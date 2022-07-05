import React, { useEffect, useState } from "react";
import "swiper/scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import DevCard from "./DevCard";
import { getData, getDataNoJWT } from "../../actions/httpHandle";
import { Buffer } from "buffer";
import Loading from "../Loading/Loading";
const DevCardList = () => {
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleGetData = async () => {
    setLoading(true);
    const data = await getDataNoJWT("get-all-cards");
    if (data.data.data) {
      const newData = handleBase64(data.data.data);
      setLoading(false);
      setCard(newData);
    } else {
      setLoading(false);
      return;
    }
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
      {loading && <Loading></Loading>}
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
