import React from "react";

const FormGenerate = () => {
  return (
    <div className="bg-[#6d1a6a] w-[50%] px-12 h-[100vh] ">
      <div className="w-full flex flex-col gap-y-10 mt-[50px] mb-10">
        <div className="w-full flex justify-end gap-x-2">
          <i className="fas fa-share-alt bg-white text-black py-2 px-[9px] rounded-md cursor-pointer button-active"></i>
          <i className="fas fa-download bg-white text-black p-2 rounded-md cursor-pointer button-active"></i>
        </div>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className=" bg-[#6d1a6a] outline-none border-b-2 border-slate-300 focus:border-white"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Avatar</label>
            <label htmlFor="file-input">
              <input type="file" className="input-file" id="file-input" />
              <div className="flex w-full items-center justify-end cursor-pointer">
                <span>Open</span>
                <i className="far fa-folder ml-1 text-xl"></i>
              </div>
              <div className="bg-[#6d1a6a] outline-none border-b-2 border-slate-300"></div>
            </label>
          </div>
          <div className="flex flex-col gap-7 relative">
            <input
              type="text"
              value={"First Skill"}
              className="bg-[#6d1a6a] outline-none"
            />
            <i className="fas fa-pencil-alt cursor-pointer absolute top-0 right-0"></i>
            <input
              id="minmax-range"
              type="range"
              min="0"
              max="100"
              class="progress-bar w-full cursor-pointer"
            ></input>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <i className="fas fa-plus bg-primary py-2 px-[10px] rounded-lg cursor-pointer button-active"></i>
            <div className="">3 more left!</div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Footer</label>
            <div className="w-full flex items-center justify-between relative">
              <input
                type="text"
                id="name"
                className=" bg-[#6d1a6a] outline-none border-b-2 border-slate-300 focus:border-white w-[90%] pl-5"
              />
              <select className="w-[10%] text-black">
                <option></option>
              </select>
              <i className="fas fa-globe absolute top-0 left-0"></i>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <i className="fas fa-plus bg-[#6d1a6a] border border-white py-2 px-[10px] rounded-lg cursor-pointer button-active"></i>
            <div className="">3 more left!</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormGenerate;
