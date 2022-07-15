import React from "react";

function SongItem() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <span className="text-lg text-[#AFAFAF]">01</span>
          <img
            alt=""
            src={require("../assets/images/Tâm hồn của đá.png")}
            className="w-12 h-12 object-cover"
          ></img>
          <div className="flex flex-col">
            <p className="text-lg">
              Rock Through the Night - Rock xuyên màn đêm
            </p>
            <p className="text-md text-[#AFAFAF]">The Soul of Rock</p>
          </div>
        </div>
        <div className="flex items-center gap-8 text-[#AFAFAF]">
          <span className="text-md">3:46</span>
          <i className="fa-solid fa-heart text-md hover:text-white cursor-pointer transition-all"></i>
          <i className="fa-solid fa-plus text-md hover:text-white cursor-pointer transition-all"></i>
        </div>
      </div>
    </>
  );
}

export default SongItem;
