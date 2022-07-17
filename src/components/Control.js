import React from "react";

function Control() {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <p className="text-2xl truncate w-full text-center">Rock Through the Night - Rock xuyên màn đêm</p>
      <p className="text-xl text-[#AFAFAF]">The Soul of Rock</p>
      <div className="flex items-center gap-4 w-full">
        <span className="text-lg text-[#AFAFAF]">0:00</span>
        <input
          id="small-range"
          type="range"
          className="h-[2px] w-full rounded-lg appearance-none cursor-pointer range-sm m-0"
        ></input>
        <span className="text-lg text-[#AFAFAF]">3:46</span>
      </div>
      <div className="flex gap-4">
        <i className="fa-solid fa-backward-step text-xl"></i>
        <i className="fa-solid fa-pause text-xl"></i>
        <i className="fa-solid fa-forward-step text-xl"></i>
      </div>
    </div>
  );
}

export default Control;
