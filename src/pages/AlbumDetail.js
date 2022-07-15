import React from "react";
import SongItem from "../components/SongItem";
import MiniPlayer from "../parts/MiniPlayer";
import Navigation from "../parts/Navigation";

function AlbumDetail(props) {
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
              <i className="fa-solid fa-arrow-left text-xl"></i>
              <p className="text-xl">
                The Soul of Rock - Tâm Hồn của Đá (2002)
              </p>
            </div>
            <div className="flex items-end gap-4 my-4">
              <img
                alt=""
                className="w-1/4"
                src={require("../assets/images/Tâm hồn của đá.png")}
              ></img>
              <p className="text-sm leading-relaxed	">
                The Soul of Rock (English title: The Soul of Rock) is the debut
                studio album by Vietnamese rock band Tuong Tuong, released on
                February 3, 2002 by Hanoi Audiovisual Center. The album collects
                10 of the most successful songs of the Wall, some of which have
                become 'gut songs' among students - the band's growth cradle.
                Although from the first demo recorded in June 1999 to the
                official recording, it took about a year because of lack of
                money to make. One year after the recording, after many knocks
                on the door of the outlets distributed throughout the North and
                the South, finally, "Soul of the Rock" was officially born. All
                production is actually done by the band members themselves.
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

export default AlbumDetail;
