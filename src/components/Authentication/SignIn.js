import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-register h-screen bg-cover bg-no-repeat flex items-center justify-center'>
      <div className='form-sign-up flex flex-col items-center justify-center bg-[#2B2B2B] rounded-xl w-[40%]'>
        <div className='title text-3xl font-bold mt-8 mb-5'>
          Sign in to
          <span className='text-primary'> DevC</span>
        </div>
        <div className='social text-primary mb-6 text-3xl flex justify-between w-[20%]'>
          <i className='fab fa-google cursor-pointer'></i>
          <i className='fab fa-facebook cursor-pointer'></i>
          <i className='fab fa-github cursor-pointer'></i>
        </div>
        <div className='tips text-[#ADADAD] text-xs font-bold mb-4'>
          Or using your email
        </div>
        <div className='form flex flex-col w-[50%] gap-5 text-black text-xs '>
          <div className='relative'>
            <i className='fas fa-envelope absolute text-[#ADADAD] my-auto mx-0 top-0 bottom-0 translate-x-1/2 translate-y-1/4'></i>
            <input
              className='rounded-sm placeholder-[#ADADAD] py-2 px-2 pl-7 w-full'
              type='text'
              placeholder='Email'
            />
          </div>
          <div className='relative'>
            <i className='fas fa-key absolute text-[#ADADAD] my-auto mx-0 top-0 bottom-0 translate-x-1/2 translate-y-1/4'></i>
            <input
              className='rounded-sm placeholder-[#ADADAD] py-2 px-2 pl-7 w-full'
              type='password'
              placeholder='Password'
            />
          </div>
        </div>
        <div
          className='tips text-[#ADADAD] text-xs font-bold mt-4 underline cursor-pointer'
          onClick={() => {
            navigate('/forgot-password');
          }}>
          Forgot your password?
        </div>
        <div className='btn-sign-up bg-primary text-sm font-normal rounded-3xl px-6 py-2 flex justify-center items-center mt-4 mb-8 cursor-pointer'>
          SIGN IN
        </div>
      </div>
    </div>
  );
};

export default SignIn;
