import React from "react";
import { useSelector } from "react-redux";
import { currentSongSelector, playListSelector } from "../redux/selector";
import MiniSongItem from "../components/MiniSongItem";
import Control from "../components/Control";

function MiniPlayer() {
  const playList = useSelector(playListSelector);
  const currentSong = useSelector(currentSongSelector);
  return (
    <div className="bg-[#131313] h-full w-3/12 rounded-tr-3xl rounded-br-3xl p-4 z-0 overflow-y-scroll no-scrollbar">
      <div className="relative w-full">
        <img
          alt=""
          src={require("../assets/images/" + currentSong.img + ".png")}
          className="w-full z-[-1]"
        ></img>
        <div className="absolute bottom-0 left-0 w-full h-3/5 z-10 p-2">
          <div className="w-full h-full rounded-xl backdrop-blur-sm flex flex-col items-center justify-around p-2">
            <Control></Control>
          </div>
        </div>
      </div>
      <p className="text-lg mt-4">Playlist</p>
      <div className="">
        {playList.map((song, index) => (
          <MiniSongItem key={index} info={song} index={index}></MiniSongItem>
        ))}
      </div>
    </div>
  );
}

export default MiniPlayer;
