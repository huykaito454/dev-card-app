import React from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-register h-screen bg-cover bg-no-repeat flex items-center justify-center'>
      <div className='form-sign-up flex flex-col items-center justify-center bg-[#2B2B2B] rounded-xl w-[40%]'>
        <div className='title text-3xl font-bold mt-8 mb-5'>
          <span className='text-primary'>Forgot </span>
          your password ?
        </div>
        <div className='tips text-[#ADADAD] text-xs font-bold mb-4'>
          We will send OTP to your mail
        </div>
        <div className='form flex flex-col w-[50%] gap-5 text-black text-xs '>
          <div className='relative'>
            <i className='fas fa-envelope absolute text-[#ADADAD] my-auto mx-0 top-0 bottom-0 translate-x-1/2 translate-y-1/4'></i>
            <input
              className='rounded-sm placeholder-[#ADADAD] py-2 px-2 pl-7 w-full'
              type='text'
              placeholder='your-registed-email@example.com'
            />
          </div>
        </div>
        <div
          className='btn-sign-up bg-primary text-sm font-normal rounded-3xl px-6 py-2 flex justify-center items-center mt-8 mb-8 cursor-pointer button-active'
          onClick={() => navigate('confirmOTP')}>
          Continue
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
