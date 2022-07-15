import React from "react";

function MiniSongItem() {
  return (
    <div className="flex justify-between items-center gap-4 w-full mt-4">
      <img
        src={require("../assets/images/Tâm hồn của đá.png")}
        className="w-12 h-12 object-cover rounded-lg"
        alt=""
      ></img>
      <div className="flex flex-col w-7/12">
        <p className="text-md w-full truncate">
          Crystal Rose - Bông hồng thủy tinh
        </p>
        <p className="text-md w-full truncate text-[#AFAFAF]">Tâm hồn của đá</p>
      </div>
      <i className="fa-solid fa-ellipsis-vertical"></i>
    </div>
  );
}

export default MiniSongItem;
