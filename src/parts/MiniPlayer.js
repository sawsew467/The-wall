import React from "react";
import MiniSongItem from "../components/MiniSongItem";

function MiniPlayer() {
  return (
    <div className="bg-[#131313] h-full w-3/12 rounded-tr-3xl rounded-br-3xl p-4 z-0 overflow-y-scroll no-scrollbar">
      <div className="relative w-full">
        <img
          alt=""
          src={require("../assets/images/Đất Việt.png")}
          className="w-full z-[-1]"
        ></img>
        <div className="absolute bottom-0 left-0 w-full h-3/5 z-10 p-2">
          <div className="w-full h-full rounded-xl backdrop-blur-sm flex flex-col items-center justify-around p-2">
            <p className="text-lg truncate w-full">
              Crystal Rose - Bông hồng thủy tinh
            </p>
            <p className="text-sm text-[#AFAFAF]">Tâm hồn của đá</p>
            <div className="flex gap-4">
              <i className="fa-solid fa-backward-step"></i>
              <i className="fa-solid fa-pause"></i>
              <i className="fa-solid fa-forward-step"></i>
            </div>
            <input
              id="small-range"
              type="range"
              className="h-[2px] rounded-lg appearance-none cursor-pointer range-sm m-0"
            ></input>
          </div>
        </div>
      </div>
      <p className="text-lg mt-4">Playlist</p>
      <div className="">
        <MiniSongItem></MiniSongItem>
        <MiniSongItem></MiniSongItem>
        <MiniSongItem></MiniSongItem>
        <MiniSongItem></MiniSongItem>
        <MiniSongItem></MiniSongItem>
        <MiniSongItem></MiniSongItem>
        <MiniSongItem></MiniSongItem>
        <MiniSongItem></MiniSongItem>
        <MiniSongItem></MiniSongItem>
      </div>
    </div>
  );
}

export default MiniPlayer;
