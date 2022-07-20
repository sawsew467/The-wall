import React from "react";
import { useSelector } from "react-redux";
import ALBUM_LIST from "../data/albumList";
import {
  currentSongSelector,
  isPlayingSelector,
  playListSelector,
  timeProgressSelector,
} from "../redux/selector";
import { useDispatch } from "react-redux";
import { setCurrentSong, setIsPlaying } from "../redux/actions";
import Range from "./Range";

function Control() {
  const currentSong = useSelector(currentSongSelector);
  const playList = useSelector(playListSelector);
  const album = ALBUM_LIST.filter((item) => item.id === currentSong.album)[0];
  const isPlaying = useSelector(isPlayingSelector);
  const dispath = useDispatch();
  const pauseAudio = () => {
    dispath(setIsPlaying(false));
  };
  const playAudio = () => {
    dispath(setIsPlaying(true));
  };
  const playFowardAudio = () => {
    const index = playList.indexOf(currentSong, playList);
    playList[index + 1] !== undefined &&
      dispath(setCurrentSong(playList[index + 1]));
  };
  const playBackwardAudio = () => {
    const index = playList.indexOf(currentSong, playList);
    playList[index - 1] !== undefined &&
      dispath(setCurrentSong(playList[index - 1]));
  };
  const timeProgress = useSelector(timeProgressSelector);
  const convertTimeProgress = (timeProgress) => {
    const minute = Math.round(timeProgress / 60)
    const seconds =
      Math.round(timeProgress % 60) < 10
        ? "0" + Math.round(timeProgress % 60)
        : Math.round(timeProgress % 60);
    console.log(minute);
    return minute + ":" + seconds;
  };
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <p className="text-2xl truncate w-full text-center">
        {currentSong.nameEn} - {currentSong.nameVi}
      </p>
      <p className="text-xl text-[#AFAFAF]">{album.nameEn}</p>
      <div className="flex items-center gap-4 w-full">
        <span className="text-lg text-[#AFAFAF]">
          {convertTimeProgress(timeProgress)}
        </span>
        <Range></Range>
        <span className="text-lg text-[#AFAFAF]">{currentSong.time}</span>
      </div>
      <div className="flex gap-4">
        <i
          className="fa-solid fa-backward-step text-xl"
          onClick={playBackwardAudio}
        ></i>
        {isPlaying ? (
          <i className="fa-solid fa-pause text-xl" onClick={pauseAudio}></i>
        ) : (
          <i className="fa-solid fa-play text-xl" onClick={playAudio}></i>
        )}
        <i
          className="fa-solid fa-forward-step text-xl"
          onClick={playFowardAudio}
        ></i>
      </div>
    </div>
  );
}

export default Control;
