import React from 'react';
import DevCard from '../DevCard/DevCard';

const CardTemplate = () => {
  return (
    <div className='w-[50%] h-[100%] flex flex-row justify-between mt-8 mb-8'>
      <div className='left-arrow flex justify-center w-[25%] pt-[40%]'>
        <i class='fas fa-angle-left text-4xl cursor-pointer'></i>
      </div>
      <div className='card-wrap w-[50%] '>
        <DevCard height={600}></DevCard>
      </div>
      <div className='right-arrow flex justify-center w-[25%] pt-[40%] '>
        <i class='fas fa-angle-right text-4xl cursor-pointer'></i>
      </div>
    </div>
  );
};

export default CardTemplate;
