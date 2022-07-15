import React from "react";

function Members() {
  return (
    <>
      {/* <p className="text-2xl text-center mb-8">Members</p> */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-around">
          <div className="flex flex-col items-center">
            <img alt="" src={require("../assets/images/Tran Lap.png")}></img>
            <span className="text-[#BC4B51] text-2xl">Tran Lap</span>
            <span className="text-lg">Lead Vocalist</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              alt=""
              src={require("../assets/images/Tran Tuan Hung.png")}
            ></img>
            <span className="text-[#BC4B51] text-2xl">Tran Tuan Hung</span>
            <span className="text-lg">Guitarist</span>
          </div>
        </div>
        <div className="flex justify-around">
          <div className="flex flex-col items-center">
            <img
              alt=""
              src={require("../assets/images/Nguyen Trung Hieu.png")}
            ></img>
            <span className="text-[#BC4B51] text-2xl">Nguyen Trung Hieu</span>
            <span className="text-lg">Drummer</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              alt=""
              src={require("../assets/images/Nguyen Minh Duc.png")}
            ></img>
            <span className="text-[#BC4B51] text-2xl">Nguyen Minh Duc</span>
            <span className="text-lg">Guitar Bass</span>
          </div>
          <div className="flex flex-col items-center">
            <img alt="" src={require("../assets/images/Vu Van Ha.png")}></img>
            <span className="text-[#BC4B51] text-2xl">Vu Van Ha</span>
            <span className="text-lg">Guitarist</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Members;
