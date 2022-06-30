import React from "react";
import logoImg from "../assets/image/logo.png";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header bg-header flex items-center justify-between px-2">
      <div className="logo lg:w-[25%] w-[10%]">
        <img
          src={logoImg}
          alt=""
          className="w-20 cursor-pointer"
          onClick={() => {
            navigate("");
          }}
        />
      </div>
      <div className="title text-3xl font-bold lg:w-[50%] lg:text-center w-[65%] hidden sm:block ">
        Dev Card Generator
      </div>
      <div className="button-group flex gap-x-2 w-[25%] justify-end">
        <div className="button bg-primary px-4 py-1 rounded-2xl font-medium button-active">
          Login
        </div>
        <div className="button bg-white text-black px-4 py-1 rounded-2xl font-medium mr-3 button-active">
          SignUp
        </div>
      </div>
    </div>
  );
};

export default Header;
