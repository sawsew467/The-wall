import React from "react";
import ALBUM_LIST from "../data/albumList";

function MiniSongItem(props) {
  const info = props.info;
  const album = ALBUM_LIST.filter((item) => item.id === info.album)[0];
  return (
    <div className="flex justify-between items-center gap-4 w-full mt-4">
      <div className="flex justify-between w-7/12 gap-4">
        <img
          src={require("../assets/images/" + info.img + ".png")}
          className="w-12 h-12 object-cover rounded-lg"
          alt=""
        ></img>
        <div className="flex flex-col w-full">
          <p className="text-md w-full truncate">
            {`${info.nameEn} - ${info.nameVi}`}
          </p>
          <p className="text-md w-full truncate text-[#AFAFAF]">
            {album.nameEn}
          </p>
        </div>
      </div>
      <i className="fa-solid fa-ellipsis-vertical"></i>
    </div>
  );
}

export default MiniSongItem;
