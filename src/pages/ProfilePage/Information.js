import React from "react";

const Information = () => {
  return (
    <div className="mt-10 flex flex-col items-start w-full gap-y-10">
      <div className="flex flex-col items-start w-full gap-y-8">
        <div className="list-item">Information</div>
        <div className="flex flex-col sm:flex-row sm:items-center items-start justify-between w-full sm:gap-0 gap-y-8">
          <div className="flex items-center justify-between sm:block w-full sm:w-fit">
            <span>Display name:</span>
            <input
              type="text"
              name=""
              id=""
              className="bg-black border-2 border-white outline-none md:ml-2 sm:w-44 w-[70%]"
            />
          </div>
          <div className="flex items-center justify-between sm:block w-full sm:w-fit">
            <span>Date of birth:</span>
            <input
              type="date"
              name=""
              id=""
              className="bg-black border-2 border-white outline-none md:ml-2 sm:w-28 w-[70%]"
            />
          </div>
          <div className="flex items-center justify-between sm:block w-full sm:w-fit">
            <span>Role:</span>
            <input
              type="text"
              name=""
              id=""
              className="bg-black border-2 border-white outline-none md:ml-2 sm:w-44 w-[70%]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start w-full gap-y-8">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <div className="sm:list-item2 list-item ">
              <span className="mr-2 md:block hidden">Other</span>
              Social
              <span className="ml-2 sm:block hidden">Platform</span>
            </div>
            <div className="flex items-center">
              <span className="sm:flex">
                You can link{" "}
                <span className="sm:block hidden sm:ml-2">1 more platform</span>
              </span>
              <img
                src="https://img.icons8.com/fluency/21/000000/facebook-new.png"
                alt=""
                className="mx-2"
              />
            </div>
          </div>
          <div className="list-item3 hover:scale-105 cursor-pointer transition-all">
            Add
          </div>
        </div>
        <div className="flex flex-col items-start gap-6 w-full">
          <div className="flex gap-x-2 items-center">
            <img
              src="https://img.icons8.com/fluency/35/000000/github.png"
              alt=""
            />
            <input
              type="text"
              name=""
              id=""
              className="bg-black border-2 border-white outline-none w-44"
            />
            <i className="fas fa-trash-alt text-2xl cursor-pointer px-1"></i>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start w-full gap-y-8">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <div className="list-item2">Change Password</div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-6 w-full"></div>
      </div>
    </div>
  );
};

export default Information;
