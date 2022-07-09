import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData, removeCard } from "../../actions/httpHandle";
import { Buffer } from "buffer";
import Loading from "../Loading/Loading";
import "swiper/scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import DevCard from "../DevCard/DevCard";
import axios from "axios";
import { API } from "../../config";
const YourCard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("userToken");
  const [card, setCard] = useState([]);
  const handleGetData = async () => {
    // const data = await getDataNoJWT("get-all-cards");
    const data = await getData("get-cards-user");
    if (data.data.data) {
      const newData = handleBase64(data.data.data);

      setCard(newData);
    } else {
      return;
    }
  };
  const handleBase64 = (data) => {
    for (var k in data) {
      data[k].image = new Buffer(data[k].image, "base64").toString("binary");
    }
    return data;
  };
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(API.getAPI("delete_card"), {
        params: { id: id },
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      alert(res.data.message);
      window.location.reload(false);
    } catch (error) {
      alert(error.response.data.message);
    }
    console.log();
  };
  useEffect(() => {
    handleGetData(localStorage.getItem("useToken"));
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
                  <SwiperSlide key={item.id} className="relative">
                    <div
                      className="px-3 py-1 bg-red-500 absolute right-0 rounded-full button-active"
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                    >
                      <i className="fas fa-times text-3xl z-"></i>
                    </div>
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
