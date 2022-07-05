import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../../actions/httpHandle";
import { Buffer } from "buffer";
import Loading from "../Loading/Loading";
import "swiper/scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import DevCard from "../DevCard/DevCard";
const YourCard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("userToken");
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleGetData = async () => {
    setLoading(true);
    // const data = await getDataNoJWT("get-all-cards");
    const data = await getData("get-cards-user");
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
  if (token !== null) {
    return (
      <div className="flex flex-col page-container w-full">
        <div className="head-card flex justify-between mb-12 ">
          <div className="your-option flex border-2 border-pink-500 cursor-pointer">
            <div className="your-card button-active flex items-center justify-center bg-primary w-36 h-8 text-lg font-bold">
              Card
            </div>
            <div className="your-template button-active flex items-center justify-center  w-32 h-8 text-lg font-bold cursor-pointer">
              Template
            </div>
          </div>
          <div
            className="add button-active flex items-center justify-center bg-primary w-36 h-8 text-lg font-bold cursor-pointer"
            onClick={() => {
              navigate("/card-generate");
            }}
          >
            Add
          </div>
        </div>
        <div className="card-list">
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
              {card.length > 0 ? (
                card.map((item) => (
                  <SwiperSlide key={item.id}>
                    <DevCard item={item}></DevCard>
                  </SwiperSlide>
                ))
              ) : (
                <span className="flex items-center justify-center">
                  You have no card
                </span>
              )}
            </Swiper>
          </div>
        </div>
      </div>
    );
  } else return <></>;
};

export default YourCard;
