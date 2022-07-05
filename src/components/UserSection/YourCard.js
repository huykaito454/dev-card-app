import React from "react";
import DevCardList from "../DevCard/DevCardList";
import { useNavigate } from "react-router-dom";
const YourCard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("userToken");
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
          <DevCardList />
        </div>
      </div>
    );
  } else return <></>;
};

export default YourCard;
