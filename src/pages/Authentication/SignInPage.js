import React from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../../config";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup
  .object({
    email: yup
      .string()
      .email("Please enter valid email address")
      .required("Please enter your email address"),
    password: yup
      .string()
      .min(8, "Your password must be at least 8 characters or greater")
      .matches(/^(?=.*[a-z])[A-Za-z\d@$!%*?&]{8,}$/, {
        message: "Must have at least 1 character",
      })
      .required("Please enter your password"),
  })
  .required();
const SignInPage = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });
  const handleLoginForm = async (data) => {
    try {
      const res = await axios.post(API.getAPI("login"), data);
      localStorage.setItem("userToken", res?.headers?.authorization);
      navigate("/");
      window.location.reload(false);
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
    }
  };
  const onSubmit = (values, e) => {
    e.preventDefault();
    if (!values.password || !values.email) {
      alert("Empty data");
    } else {
      handleLoginForm(values);
    }
  };
  return (
    <div className="bg-register h-screen bg-cover bg-no-repeat flex items-center justify-center">
      <form
        className="form-sign-up w-[600px] flex flex-col items-center justify-center bg-[#2B2B2B] rounded-xl md:px-20 px-10 py-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="title text-3xl font-bold mt-8 mb-5">
          Sign in to
          <span className="text-primary"> DevC</span>
        </div>
        <div className="social text-primary mb-6 text-3xl flex justify-between w-[35%]">
          <i className="fab fa-google cursor-pointer"></i>
          <i className="fab fa-facebook cursor-pointer"></i>
          <i className="fab fa-github cursor-pointer"></i>
        </div>
        <div className="tips text-[#ADADAD] text-xs font-bold mb-4">
          Or using your email
        </div>
        <div className="form flex flex-col w-[100%] gap-5 text-black text-xs ">
          <Input
            placeholder="Email"
            icon={"fas fa-envelope"}
            name="email"
            control={control}
            type="email"
          ></Input>
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
          <Input
            placeholder="Password"
            icon={"fas fa-key"}
            name="password"
            control={control}
            type="password"
          ></Input>
          {errors.password && (
            <p className="text-xs text-red-500">{errors.password.message}</p>
          )}
        </div>
        <div
          className="tips text-[#ADADAD] text-xs font-bold mt-4 underline cursor-pointer"
          onClick={() => {
            navigate("/forgot-password");
          }}
        >
          Forgot your password?
        </div>
        <button
          className="btn-sign-up bg-primary text-sm font-normal rounded-3xl px-6 py-2 flex justify-center items-center mt-4 mb-8 cursor-pointer button-active"
          disabled={isSubmitting}
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default SignInPage;
