import React from 'react';

const ResetPassword = () => {
  return (
    <div className='bg-register h-screen bg-cover bg-no-repeat flex items-center justify-center'>
      <div className='form-sign-up flex flex-col items-center justify-center bg-[#2B2B2B] rounded-xl md:px-48 px-20 py-5'>
        <div className='title text-3xl font-bold mt-8 mb-5'>
          Creating
          <span className='text-primary'> Account</span>
        </div>
        <div className='form flex flex-col w-[50%] gap-5 text-black text-xs '>
          <div className='relative'>
            <i className='fas fa-key absolute text-[#ADADAD] my-auto mx-0 top-0 bottom-0 translate-x-1/2 translate-y-1/4'></i>
            <input
              className='rounded-sm placeholder-[#ADADAD] py-2 px-2 pl-7 w-full'
              type='password'
              placeholder='New password'
            />
          </div>
          <div className='relative'>
            <i className='fas fa-key absolute text-[#ADADAD] my-auto mx-0 top-0 bottom-0 translate-x-1/2 translate-y-1/4'></i>
            <input
              className='rounded-sm placeholder-[#ADADAD] py-2 px-2 pl-7 w-full'
              type='password'
              placeholder='Confirm new password'
            />
          </div>
        </div>
        <div className='btn-sign-up bg-primary text-sm font-normal rounded-3xl px-6 py-2 flex justify-center items-center mt-8 mb-8 cursor-pointer button-active'>
          Continue
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
