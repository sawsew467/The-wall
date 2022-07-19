import React, { useEffect, useRef, useState } from "react";
import musicWave from "../assets/images/wavemusic icon.svg";
import mouse from "../assets/images/mouse.svg";
import heading from "../assets/images/the wall.svg";
import gsap from "gsap";
import { Link, useNavigate } from "react-router-dom";
import rakhoi from "../assets/audio/rakhoi.mp3";
import MusicWave from "../components/MusicWave";

function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  let topRef = useRef(null);
  let headingRef = useRef(null);
  let descRef = useRef(null);
  let btnsRef = useRef(null);
  let bottomRef = useRef(null);
  let backgroundRef = useRef(null);
  const audioRef = useRef(null);
console.log("audioRef: ", audioRef);
  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
    audioRef.current.volume = 0.2;
  }, [isPlaying]);

  // animation
  useEffect(() => {
    gsap.to(topRef, {
      duration: 1.5,
      ease: "power3.out",
      opacity: 1,
      y: -20,
      delay: 3.5,
    });
    gsap.to(bottomRef, {
      duration: 1.5,
      ease: "power3.out",
      opacity: 1,
      y: -20,
      delay: 3.5,
    });
    gsap.to(descRef, {
      duration: 1.5,
      ease: "power3.out",
      opacity: 1,
      y: -20,
      delay: 3.5,
    });
    gsap.to(btnsRef, {
      duration: 1.5,
      ease: "power3.out",
      opacity: 1,
      y: -20,
      delay: 3.5,
    });
    gsap.to(headingRef, { duration: 1.5, opacity: 1, delay: 2 });
    gsap.to(backgroundRef, { duration: 2, ease: "power3.out", height: "100%" });
  }, []);
  //
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center p-10">
        <img
          alt=""
          src={require("../assets/images/background.png")}
          className="w-full h-0 object-cover absolute z-[-1]"
          ref={(el) => {
            backgroundRef = el;
          }}
        ></img>
        <div className="container w-full h-full flex flex-col justify-between">
          <div
            className="flex justify-between items-center opacity-0"
            ref={(el) => {
              topRef = el;
            }}
          >
            <img alt="" src={require("../assets/images/logo.png")}></img>
            <div className="flex items-end text-white gap-10">
              <div className="" onClick={() => setIsPlaying(!isPlaying)}>
                <div
                  className={
                    isPlaying
                      ? "w-4 h-4 bg-white playing mb-1 transition-all "
                      : "w-4 h-4 bg-white pause mb-1 transition-all"
                  }
                ></div>
              </div>
              <p className="font-bold text-lg">Ra khơi</p>
              {/* <img alt="" src={musicWave} className="mb-1"></img> */}
              <MusicWave></MusicWave>
              <audio src={require("../assets/audio/rakhoi.mp3")} ref={audioRef}></audio>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              alt=""
              src={heading}
              className="mb-8 opacity-0"
              ref={(el) => {
                headingRef = el;
              }}
            ></img>
            <p
              className="text-lg text-white max-w-2xl text-center opacity-0 mb-4"
              ref={(el) => {
                descRef = el;
              }}
            >
              The Wall ("Bức tường") formed in 1995 from Vietnam's National
              University of Civil Engineering in Hanoi. This is one of the first
              professional Vietnamese glam metal bands
            </p>
            <div
              className="flex gap-4 opacity-0"
              ref={(el) => {
                btnsRef = el;
              }}
            >
              <Link to="/about">
                <div className="button-container">
                  <span className="mask py-2 px-8">Explore</span>
                  <button type="button" name="Hover" className="py-2 px-8">
                    Explore
                  </button>
                </div>
              </Link>
              <a
                href="https://www.facebook.com/groups/2521686118132675"
                target="_blank"
              >
                <div className="button-container">
                  <span className="mask py-2 px-8">Community</span>
                  <button type="button" name="Hover" className="py-2 px-8">
                    Community
                  </button>
                </div>
              </a>
            </div>
          </div>
          <div
            className="flex justify-between items-center opacity-0"
            ref={(el) => {
              bottomRef = el;
            }}
          >
            <a href="https://www.facebook.com/SawSew467/" target="_blank">
              <div className="font-bold text-lg">
                Copyright 2022 - David Tran
              </div>
            </a>
            <div className="text-lg text-white font-bold">1985</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
