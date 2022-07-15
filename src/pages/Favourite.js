import React from "react";
import SongItem from "../components/SongItem";
import MiniPlayer from "../parts/MiniPlayer";
import Navigation from "../parts/Navigation";

function Favourite(props) {
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
            <div className="flex justify-between">
              <p className="text-xl mb-4">Favourite songs</p>
              <button className="flex gap-2 items-center px-4 border-2 rounded-xl outline-none">
                <i className="fa-solid fa-play"></i>
                <span>Play</span>
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
              <SongItem></SongItem>
              <SongItem></SongItem>
              <SongItem></SongItem>
              <SongItem></SongItem>
              <SongItem></SongItem>
              <SongItem></SongItem>
            </div>
          </div>
          <MiniPlayer></MiniPlayer>
        </div>
      </div>
    </>
  );
}

export default Favourite;
