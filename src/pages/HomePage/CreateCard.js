import React from "react";
import { useNavigate } from "react-router-dom";
const CreateCard = () => {
  const navigate = useNavigate();
  return (
    <div className="uppercase text-3xl font-semibold flex flex-col items-center mb-10 select-none">
      <h1>
        <span>interest? create</span>
      </h1>
      <h1 className="mb-4">
        <span>your </span>
        <span className="text-primary">own</span>
      </h1>
      <div
        className="button-active"
        onClick={() => {
          navigate("/card-generate");
        }}
      >
        <i className="fas fa-plus bg-primary py-2 px-[10px] rounded-full"></i>
      </div>
    </div>
  );
};

export default CreateCard;
