import React from "react";
import Members from "../components/Members";
import MiniPlayer from "../parts/MiniPlayer";
import Navigation from "../parts/Navigation";

function About(props) {
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
            <p className="text-xl mb-4">About</p>
            <img
              alt=""
              src={require("../assets/images/banner.png")}
              className="w-full"
            ></img>
            <p className="text-lg text-center py-4">
              Bức Tường ("The Wall") is one of the first professional Vietnamese
              glam metal bands, formed in 1995 from Vietnam's National
              University of Civil Engineering in Hanoi. The band is considered
              to be the leader of Hanoi's rock scene.
            </p>
            <Members></Members>
          </div>
          <MiniPlayer></MiniPlayer>
        </div>
      </div>
    </>
  );
}

export default About;
