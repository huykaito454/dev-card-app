import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-[90vh] w-[100vw] bg-black bg-opacity-50 z-[999] fixed">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
