import React from "react";
import { useForm } from "react-hook-form";
const ConfirmOTP = () => {
  const { register } = useForm();
  const clickEvent = (first, last) => {
    if (first.value) {
      document.getElementById(last).focus();
    }
  };
  return (
    <div className="bg-register h-screen bg-cover bg-no-repeat flex items-center justify-center">
      <form className="form-sign-up flex flex-col items-center justify-center bg-[#2B2B2B] rounded-xl md:px-20 px-10 py-5 w-[600px]">
        <div className="title text-3xl font-bold mt-8 mb-5">
          <span className="text-primary">OTP </span>
          Verification
        </div>
        <div className="tips text-[#ADADAD] text-xs font-bold mb-4">
          Please enter 4 digit OTP that we sent
        </div>
        <div className="form flex flex-col w-[50%] gap-5 text-black text-xs ">
          <div className="flex justify-center">
            <input
              className="m-2 border h-10 w-10 text-center form-control rounded"
              type="text"
              id="first"
              maxLength="1"
              onKeyUp={(e) => {
                clickEvent(e.target, "second");
              }}
            />
            <input
              className="m-2 border h-10 w-10 text-center form-control rounded"
              type="text"
              id="second"
              maxLength="1"
              onKeyUp={(e) => {
                clickEvent(e.target, "third");
              }}
            />
            <input
              className="m-2 border h-10 w-10 text-center form-control rounded"
              type="text"
              id="third"
              maxLength="1"
              onKeyUp={(e) => {
                clickEvent(e.target, "fourth");
              }}
            />
            <input
              className="m-2 border h-10 w-10 text-center form-control rounded"
              type="text"
              id="fourth"
              maxLength="1"
              onKeyUp={(e) => {
                clickEvent(e.target, "first");
              }}
            />
          </div>
        </div>
        <div className="btn-sign-up bg-primary text-sm font-normal rounded-3xl px-6 py-2 flex justify-center items-center mt-4 cursor-pointer button-active">
          Continue
        </div>
        <div className="tips text-[#ADADAD] text-xs font-bold mt-4 underline mb-4">
          Resend 40s
        </div>
      </form>
    </div>
  );
};

export default ConfirmOTP;
