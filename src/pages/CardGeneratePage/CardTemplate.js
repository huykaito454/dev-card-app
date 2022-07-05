import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import DevCard from "../../components/DevCard/DevCard";
import { Buffer } from "buffer";
import { getDataNoJWT } from "../../actions/httpHandle";
const CardTemplate = () => {
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
          {card.length > 0 &&
            card.map((item) => (
              <SwiperSlide key={item.id}>
                <DevCard height={500} item={item}></DevCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CardTemplate;
