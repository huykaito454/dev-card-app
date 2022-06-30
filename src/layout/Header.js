import React from "react";
import logoImg from "../assets/image/logo.png";
const Header = () => {
  return (
    <div className="header bg-header flex items-center justify-between px-2">
      <div className="logo w-[25%]">
        <img src={logoImg} alt="" className="w-20" />
      </div>
      <div className="title text-3xl font-bold w-[50%] text-center">
        Dev Card Generator
      </div>
      <div className="button-group flex gap-x-2 w-[25%] justify-end">
        <div className="button bg-primary px-4 py-1 rounded-2xl font-medium">
          Login
        </div>
        <div className="button bg-white text-black px-4 py-1 rounded-2xl font-medium mr-3">
          SignUp
        </div>
      </div>
    </div>
  );
};

export default Header;
