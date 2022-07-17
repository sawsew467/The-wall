import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SongItem from "../components/SongItem";
import ALBUM_LIST from "../data/albumList";
import SONG_LIST from "../data/songList";
import MiniPlayer from "../parts/MiniPlayer";
import Navigation from "../parts/Navigation";
import { albumDisplaySelector } from "../redux/selector";

function AlbumDetail(props) {
  const idReducer = useSelector(albumDisplaySelector);
  const albumId = idReducer === "" ? "a000001" : idReducer;
  const infoAlbum = ALBUM_LIST.filter((item) => item.id === albumId)[0];
  const songs = SONG_LIST.filter((item) => item.album === albumId)
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
            <div className="flex gap-4">
              <Link to="/albums">
              <i className="fa-solid fa-arrow-left text-xl"></i>
              </Link>
              <p className="text-xl">
              {`${infoAlbum.nameEn} - ${infoAlbum.nameVn} (${infoAlbum.released})`}
              </p>
            </div>
            <div className="flex items-end gap-4 my-4">
              <img
                alt=""
                className="w-1/4"
                src={require("../assets/images/" + infoAlbum.img + ".png")}
              ></img>
              <p className="text-sm leading-relaxed	">
              {infoAlbum.desc}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg mb-4">Tracklist</p>
              <button className="flex gap-2 items-center py-1 px-4 border-2 rounded-xl outline-none">
                <i className="fa-solid fa-play"></i>
                <span>Play</span>
              </button>
            </div>
            <div className="flex flex-col gap-4">
                {
                  songs.map((song, index) => (
                    <SongItem key={index} info={song} index={index}></SongItem>
                  ))
                }
            </div>
          </div>
          <MiniPlayer></MiniPlayer>
        </div>
      </div>
    </>
  );
}

export default AlbumDetail;
