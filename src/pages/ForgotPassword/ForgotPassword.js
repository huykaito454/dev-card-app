import React from "react";
import { useForm } from "react-hook-form";
import Input from "../Authentication/Input";
import { useNavigate } from "react-router-dom";
const ForgotPassword = () => {
  const navigate = useNavigate();
  const { control } = useForm();
  return (
    <div className="bg-register h-screen bg-cover bg-no-repeat flex items-center justify-center">
      <div className="form-sign-up flex flex-col items-center justify-center bg-[#2B2B2B] rounded-xl md:px-40 px-20 py-5">
        <div className="title text-3xl font-bold mt-8 mb-5">
          <span className="text-primary">Forgot </span>
          your password ?
        </div>
        <div className="tips text-[#ADADAD] text-xs font-bold mb-4">
          We will send OTP to your mail
        </div>
        <div className="form flex flex-col w-[100%] gap-5 text-black text-xs ">
          <Input
            placeholder="your-registed-email@example.com"
            icon={"fas fa-key"}
            name="email"
            control={control}
          ></Input>
        </div>
        <div
          className="btn-sign-up bg-primary text-sm font-normal rounded-3xl px-6 py-2 flex justify-center items-center mt-8 mb-8 cursor-pointer button-active"
          onClick={() => {
            navigate("/confirmOTP");
          }}
        >
          Continue
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
