import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { settingsSelector } from "../redux/selector";

function Navigation(props) {
  const choosen = props.choosen;
  // const [showSettings, setShowSettings] = useState(useSelector(settingsSelector));
  // console.log("showSettings: ", showSettings);
  // const dispatch = useDispatch();
  // const handleSettingsClick = () => {
  //   dispatch(setShowSettings(!showSettings))
  // }
  return (
    <>
      <div className="bg-[#131313] h-full w-1/12 rounded-tl-3xl rounded-bl-3xl py-4 flex flex-col items-center justify-between">
        <img src={require("../assets/images/avt.png")} alt=""></img>
        <nav className="flex flex-col w-full text-[#AFAFAF]">
          <Link to="/about">
            <div
              className={
                choosen === 1
                  ? "w-full flex flex-col items-center p-4 bg-[#BC4B51] text-white border-l-4"
                  : "w-full flex flex-col items-center p-4 border-l-4 border-[#131313] hover:text-white transition-all"
              }
            >
              <i className="fa-solid fa-info text-lg"></i>
              <span className="text-md">About</span>
            </div>
          </Link>
          <Link to="/player">
            <div
              className={
                choosen === 2
                  ? "w-full flex flex-col items-center p-4 bg-[#BC4B51] text-white border-l-4"
                  : "w-full flex flex-col items-center p-4 border-l-4 border-[#131313] hover:text-white transition-all"
              }
            >
              <i className="fa-solid fa-play text-lg"></i>
              <span className="text-md">Player</span>
            </div>
          </Link>
          <Link to="/albums">
            <div
              className={
                choosen === 3
                  ? "w-full flex flex-col items-center p-4 bg-[#BC4B51] text-white border-l-4"
                  : "w-full flex flex-col items-center p-4 border-l-4 border-[#131313] hover:text-white transition-all"
              }
            >
              <i className="fa-solid fa-compact-disc text-lg"></i>
              <span className="text-md">Albums</span>
            </div>
          </Link>
          <Link to="/favourite">
            <div
              className={
                choosen === 4
                  ? "w-full flex flex-col items-center p-4 bg-[#BC4B51] text-white border-l-4"
                  : "w-full flex flex-col items-center p-4 border-l-4 border-[#131313] hover:text-white transition-all"
              }
            >
              <i className="fa-solid fa-heart text-lg"></i>
              <span className="text-md">Favourite</span>
            </div>
          </Link>
        </nav>
        <Link to="/settings">
          <i
            // className={
            //   showSettings
            //     ? "fa-solid fa-gear text-2xl transition-all duration-500 rotate-90"
            //     : "fa-solid fa-gear text-2xl rotate-180 transition-all duration-500"
            // }
            className="fa-solid fa-gear text-2xl"
            // onClick={handleSettingsClick}
          ></i>
        </Link>
      </div>
    </>
  );
}

export default Navigation;
