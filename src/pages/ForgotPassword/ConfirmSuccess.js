import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConfirmSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className='bg-register h-screen bg-cover bg-no-repeat flex items-center justify-center'>
      <div className='form-sign-up flex flex-col items-center justify-center bg-[#2B2B2B] rounded-xl w-[40%]'>
        <div className='title text-3xl font-bold mt-8 mb-5'>
          <span className='text-primary'>Sucessfully </span>
          restored
        </div>
        <div className='tips flex gap-1 text-[#ADADAD] text-xs font-bold mb-6'>
          Login again
          <p
            className='underline cursor-pointer'
            onClick={() => navigate('/sign-in')}>
            here
          </p>
        </div>
        <div className='bg-check h-40 w-40 mb-8'></div>
      </div>
    </div>
  );
};

export default ConfirmSuccess;
