import React from "react";
import MiniPlayer from "../parts/MiniPlayer";
import Navigation from "../parts/Navigation";

function Settings(props) {
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
            <div className="flex items-center justify-center w-full h-full">
              <p className="text-3xl">Sorry, this page will be update soon!!!</p>
            </div>
          </div>
          <MiniPlayer></MiniPlayer>
        </div>
      </div>
    </>
  );
}

export default Settings;
