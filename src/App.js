import { Route, Routes } from "react-router";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Player from "../src/pages/Player";
import Albums from "../src/pages/Albums";
import Favourite from "../src/pages/Favourite";
import AlbumDetail from "./pages/AlbumDetail";
import Settings from "./pages/Settings";
import { useSelector } from "react-redux";
import {
  currentSongSelector,
  isPlayingSelector,
  playListSelector,
} from "./redux/selector";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setCurrentSong, setPercentRange, setTimeProgress } from "./redux/actions";

function App() {
  const playList = useSelector(playListSelector);
  const currentSong = useSelector(currentSongSelector);
  const audioRef = useRef(null);
  const isPlaying = useSelector(isPlayingSelector);
  const dispath = useDispatch();
  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
    audioRef.current.volume = 0.2;
    // console.log(audioRef.current.currentTime);
  }, [isPlaying]);
  const getCurrDuration = (e) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);
    const time = e.currentTarget.currentTime;
    if (percent >= 99.9) {
      console.log("finnish");
      const index = playList.indexOf(currentSong, playList);
      console.log(playList[index + 1]);
      playList[index + 1] !== undefined &&
        dispath(setCurrentSong(playList[index + 1]));
    }
    dispath(setPercentRange(percent));
    dispath(setTimeProgress(time));
    // console.log("!!!", percent, time);
  };
  return (
    <>
      <audio
        src={currentSong.src}
        autoPlay={true}
        ref={audioRef}
        onTimeUpdate={getCurrDuration}
        // onLoadedData={(e)=> {console.log(e)}}
      ></audio>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About choosen={1}></About>}></Route>
        <Route path="/player" element={<Player choosen={2}></Player>}></Route>
        <Route path="/albums" element={<Albums choosen={3}></Albums>}></Route>
        <Route
          path="/albumdetail"
          element={<AlbumDetail choosen={3}></AlbumDetail>}
        ></Route>
        <Route
          path="/favourite"
          element={<Favourite choosen={4}></Favourite>}
        ></Route>
        <Route
          path="/settings"
          element={<Settings choosen={0}></Settings>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
