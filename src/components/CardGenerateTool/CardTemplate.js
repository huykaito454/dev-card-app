import React from 'react';
import DevCard from '../DevCard/DevCard';

const CardTemplate = () => {
  return (
    <div className='w-[50%] h-[100%] flex flex-row justify-center'>
      <div className='card-wrap w-[50%]'>
        <DevCard height={600}></DevCard>
      </div>
    </div>
  );
};

export default CardTemplate;
