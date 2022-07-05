import React from "react";

const Modal = () => {
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 z-[999] flex items-center justify-center ">
      <div className="bg-white p-8 text-black flex flex-col rounded-lg">
        <h1 className="uppercase text-2xl text-primary">notification</h1>
      </div>
    </div>
  );
};

export default Modal;
