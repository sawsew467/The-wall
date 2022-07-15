import React from "react";
import SongItem from "../components/SongItem";
import Navigation from "../parts/Navigation";

function Player(props) {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center p-10">
        <img
          alt=""
          src={require("../assets/images/background-2.png")}
          className="w-full h-full object-cover absolute z-[-1]"
        ></img>
        <div className="container w-full h-full flex justify-between bg-black rounded-3xl">
          <Navigation choosen={props.choosen}></Navigation>
          <div className="flex-1 p-4 h-full overflow-hidden overflow-y-scroll no-scrollbar">
            <div className="flex">
              <div className="w-1/3 relative flex justify-center items-center">
                <img
                   alt=""
                  src={require("../assets/images/Tâm hồn của đá.png")}
                  className="top-0 left-0 w-full rounded-full rotate-45"
                ></img>
                <div className="absolute w-20 h-20 rounded-full border-4 border-[#AFAFAF] bg-black z-20"></div>
              </div>
              <div className="w-2/3 flex items-center justify-center flex-col">
                <p className="text-2xl">
                  Rock Through the Night - Rock xuyên màn đêm
                </p>
                <p className="text-xl text-[#AFAFAF]">The Soul of Rock</p>
                <div className="flex items-center gap-4 w-1/2">
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
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg my-4">Playlist</p>
              <button className="flex gap-2 items-center py-1 px-4 border-2 rounded-xl outline-none">
                <i className="fa-solid fa-play"></i>
                <span>Clear</span>
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <SongItem></SongItem>
              <SongItem></SongItem>
              <SongItem></SongItem>
              <SongItem></SongItem>
              <SongItem></SongItem>
              <SongItem></SongItem>
              <SongItem></SongItem>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Player;
