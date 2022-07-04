import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { API } from "../../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { handleResendOTP } from "../../actions/httpHandle";
const ConfirmOTP = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [count, setCount] = useState(60);
  const email = sessionStorage.getItem("email");
  const clickEvent = (first, last) => {
    if (first.value) {
      document.getElementById(last).focus();
    }
  };
  const onSubmit = (values) => {
    const otp = `${values.first}${values.second}${values.third}${values.fourth}`;

    const data = { email: email, otp: otp };
    handleOTP(data);
  };
  const handleOTP = async (data) => {
    try {
      const res = await axios.post(API.getAPI("verify"), data);
      alert(res.data.message);
      navigate("/sign-in");
      sessionStorage.removeItem("email");
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
    }
  };
  const handleCount = () => {
    if (count > 0) {
      setCount(count - 1);
    } else return;
  };
  const handleResend = async () => {
    const res = await handleResendOTP("re-send", { email: email });
    setCount(60);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      handleCount();
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);
  return (
    <div className="bg-register h-screen bg-cover bg-no-repeat flex items-center justify-center">
      <form
        className="form-sign-up flex flex-col items-center justify-center bg-[#2B2B2B] rounded-xl md:px-20 px-10 py-5 w-[600px]"
        onSubmit={handleSubmit(onSubmit)}
      >
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
              {...register("first")}
              onKeyUp={(e) => {
                clickEvent(e.target, "second");
              }}
            />
            <input
              className="m-2 border h-10 w-10 text-center form-control rounded"
              type="text"
              id="second"
              maxLength="1"
              {...register("second")}
              onKeyUp={(e) => {
                clickEvent(e.target, "third");
              }}
            />
            <input
              className="m-2 border h-10 w-10 text-center form-control rounded"
              type="text"
              id="third"
              maxLength="1"
              {...register("third")}
              onKeyUp={(e) => {
                clickEvent(e.target, "fourth");
              }}
            />
            <input
              className="m-2 border h-10 w-10 text-center form-control rounded"
              type="text"
              id="fourth"
              maxLength="1"
              {...register("fourth")}
              onKeyUp={(e) => {
                clickEvent(e.target, "first");
              }}
            />
          </div>
        </div>
        {count > 0 && (
          <>
            <button className="btn-sign-up bg-primary text-sm font-normal rounded-3xl px-6 py-2 flex justify-center items-center mt-4 cursor-pointer button-active">
              Continue
            </button>
            <div className="tips text-[#ADADAD] text-xs font-bold mt-4 underline mb-4">
              Resend {count}s
            </div>
          </>
        )}
        {count === 0 && (
          <div
            className="btn-sign-up bg-primary text-sm font-normal rounded-3xl px-6 py-2 flex justify-center items-center mt-4 cursor-pointer button-active mb-4"
            onClick={handleResend}
          >
            Resend
          </div>
        )}
      </form>
    </div>
  );
};

export default ConfirmOTP;
