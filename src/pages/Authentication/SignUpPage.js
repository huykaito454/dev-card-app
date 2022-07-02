import React from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import * as yup from "yup";
const SignUpPage = () => {
  const { control } = useForm();
  return (
    <div className="bg-register h-screen bg-cover bg-no-repeat flex items-center justify-center">
      <div className="form-sign-up flex flex-col items-center justify-center bg-[#2B2B2B] rounded-xl md:px-48 px-20 py-5">
        <div className="title text-3xl font-bold mt-8 mb-5">
          Creating
          <span className="text-primary"> Account</span>
        </div>
        <div className="social text-primary mb-6 text-3xl flex justify-between w-[50%]">
          <i className="fab fa-google cursor-pointer"></i>
          <i className="fab fa-facebook cursor-pointer"></i>
          <i className="fab fa-github cursor-pointer"></i>
        </div>
        <div className="tips text-[#ADADAD] text-xs font-bold mb-4">
          Or using your email for registration
        </div>
        <div className="form flex flex-col w-[100%] gap-5 text-black text-xs ">
          <Input
            placeholder="Email"
            icon={"fas fa-envelope"}
            name="email"
            control={control}
          ></Input>
          <Input
            placeholder="Password"
            icon={"fas fa-key"}
            name="password"
            control={control}
          ></Input>
          <Input
            placeholder="Confirm Password"
            icon={"fas fa-key"}
            name="confirmPassword"
            control={control}
          ></Input>
        </div>
        <div className="btn-sign-up bg-primary text-sm font-normal rounded-3xl px-6 py-2 flex justify-center items-center mt-8 mb-8 cursor-pointer">
          SIGN UP
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
