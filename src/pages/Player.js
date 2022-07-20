import React, { useEffect, useState} from "react";
import SongItem from "../components/SongItem";
import Navigation from "../parts/Navigation";
import { useSelector } from "react-redux";
import {
  currentSongSelector,
  isPlayingSelector,
  playListSelector,
} from "../redux/selector";
import Control from "../components/Control";
import { useDispatch } from "react-redux";
import { setIsPlaying, updatePlayList } from "../redux/actions";
import ClearWarningAleart from "../alerts/ClearWarningAleart.js";

function Player(props) {
  const playList = useSelector(playListSelector);
  const currentSong = useSelector(currentSongSelector);
  const dispath = useDispatch();
  const clearAllPlayList = () => {
    const newPlayList = [];
    dispath(updatePlayList(newPlayList));
    dispath(setIsPlaying(false));
  };
  const isPlaying = useSelector(isPlayingSelector);
  const [isConfirm, setIsConfirm] = useState(false);
  const callbackIsConfirm = (childData) => {
    setIsConfirm(childData);
    setIsDisplayAlert(false);
  };
  const [isDisplayAlert, setIsDisplayAlert] = useState(false);
  useEffect(() => {
    if (isConfirm === true) {
      const newPlayList = [];
      dispath(updatePlayList(newPlayList));
      dispath(setIsPlaying(false));
    }
  }, [isConfirm]);
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center p-10">
      {isDisplayAlert && (
          <ClearWarningAleart
            parentCallback={callbackIsConfirm}
          ></ClearWarningAleart>
        )}
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
                  src={require("../assets/images/" + currentSong.img + ".png")}
                  className={
                    isPlaying
                      ? "top-0 left-0 w-full rounded-full animate-spin-slow"
                      : "top-0 left-0 w-full rounded-full spin1"
                  }
                ></img>
                <div className="absolute w-20 h-20 rounded-full border-4 border-[#AFAFAF] bg-black z-20"></div>
              </div>
              <div className="w-2/3 flex items-center justify-center flex-col">
                <div className="w-2/3 flex items-center justify-center flex-col">
                  <Control></Control>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg my-4">Playlist</p>
              <button
                className="flex gap-2 items-center py-1 px-4 border-2 rounded-xl outline-none"
                onClick={() => setIsDisplayAlert(!isDisplayAlert)}
              >
                <i className="fa-solid fa-trash"></i>
                <span>Clear</span>
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {playList.map((song, index) => (
                <SongItem key={index} info={song} index={index}></SongItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Player;
