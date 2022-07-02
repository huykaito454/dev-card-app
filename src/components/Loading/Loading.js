import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-[100vh] w-[100vw] bg-transparent z-[999]">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
