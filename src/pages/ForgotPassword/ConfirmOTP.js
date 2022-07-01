import React from 'react';

const ConfirmOTP = () => {
  return (
    <div className='bg-register h-screen bg-cover bg-no-repeat flex items-center justify-center'>
      <div className='form-sign-up flex flex-col items-center justify-center bg-[#2B2B2B] rounded-xl w-[40%]'>
        <div className='title text-3xl font-bold mt-8 mb-5'>
          <span className='text-primary'>Forgot </span>
          your password ?
        </div>
        <div className='tips text-[#ADADAD] text-xs font-bold mb-4'>
          Please enter 4 digit OTP that we sent
        </div>
        <div className='form flex flex-col w-[50%] gap-5 text-black text-xs '>
          <div className='flex justify-center'>
            <input
              class='m-2 border h-10 w-10 text-center form-control rounded'
              type='text'
              id='first'
              maxlength='1'
            />
            <input
              class='m-2 border h-10 w-10 text-center form-control rounded'
              type='text'
              id='second'
              maxlength='1'
            />
            <input
              class='m-2 border h-10 w-10 text-center form-control rounded'
              type='text'
              id='third'
              maxlength='1'
            />
            <input
              class='m-2 border h-10 w-10 text-center form-control rounded'
              type='text'
              id='fourth'
              maxlength='1'
            />
          </div>
        </div>
        <div className='btn-sign-up bg-primary text-sm font-normal rounded-3xl px-6 py-2 flex justify-center items-center mt-4 cursor-pointer button-active'>
          Continue
        </div>
        <div className='tips text-[#ADADAD] text-xs font-bold mt-4 underline mb-4'>
          Resend 40s
        </div>
      </div>
    </div>
  );
};

export default ConfirmOTP;
