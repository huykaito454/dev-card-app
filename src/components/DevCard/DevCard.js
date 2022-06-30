import React from 'react';

const DevCard = () => {
  return (
    <div
      className='dev-card h-[400px] bg-cover bg-no-repeat bg-center rounded-xl py-6 px-3 flex flex-col justify-between overflow-hidden'
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80)',
      }}>
      <div className='name text-2xl font-bold text-ellipsis overflow-hidden'>
        @nthuy
      </div>
      <div className='card-content'>
        <div className='information mb-3'>
          <p className='text-4xl font-bold'>21</p>
          <p>Frontend Developer </p>
        </div>
        <div className='skills flex flex-col gap-y-1 mb-3'>
          <div className='skill-item '>
            <div className='skill-item-name text-xs mb-1'>Github</div>
            <div className='w-[55%] bg-gray-500 h-1 rounded-lg'>
              <div
                className='bg-white h-1 rounded-lg'
                style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className='skill-item '>
            <div className='skill-item-name text-xs mb-1'>Github</div>
            <div className='w-[55%] bg-gray-500 h-1 rounded-lg'>
              <div
                className='bg-white h-1 rounded-lg'
                style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className='skill-item '>
            <div className='skill-item-name text-xs mb-1'>Github</div>
            <div className='w-[55%] bg-gray-500 h-1 rounded-lg'>
              <div
                className='bg-white h-1 rounded-lg'
                style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className='skill-item '>
            <div className='skill-item-name text-xs mb-1'>Github</div>
            <div className='w-[55%] bg-gray-500 h-1 rounded-lg'>
              <div
                className='bg-white h-1 rounded-lg'
                style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
        <div className='socials flex items-center'>
          <img
            src='https://img.icons8.com/fluency/35/000000/facebook-new.png'
            alt=''
          />
          <img
            src='https://img.icons8.com/fluency/35/000000/instagram-new.png'
            alt=''
          />
          <img
            src='https://img.icons8.com/fluency/35/000000/github.png'
            alt=''
          />
          <img
            src='https://img.icons8.com/fluency/35/000000/linkedin.png'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default DevCard;
