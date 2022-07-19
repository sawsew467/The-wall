import React from "react";
import { useSelector } from "react-redux";
import ALBUM_LIST from "../data/albumList";
import { currentSongSelector } from "../redux/selector";

function Control() {
  const currentSong = useSelector(currentSongSelector);
  const album = ALBUM_LIST.filter(item => item.id === currentSong.album)[0];
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <p className="text-2xl truncate w-full text-center">{currentSong.nameEn} - {currentSong.nameVi}</p>
      <p className="text-xl text-[#AFAFAF]">{album.nameEn}</p>
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
