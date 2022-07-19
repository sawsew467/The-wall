import { Route, Routes } from "react-router";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Player from "../src/pages/Player";
import Albums from "../src/pages/Albums";
import Favourite from "../src/pages/Favourite";
import AlbumDetail from "./pages/AlbumDetail";
import Settings from "./pages/Settings";
import { useSelector } from "react-redux";
import { setSrcAudio } from "./redux/actions";
import { currentSongSelector } from "./redux/selector";

function App() {
  const currentSong = useSelector(currentSongSelector);
  return (
    <>
      <audio
        src={currentSong.src}
        autoPlay={true}
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
