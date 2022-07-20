import React from "react";
import { useSelector } from "react-redux";
import { percentRangeSelector } from "../redux/selector";

function Range() {
  const percentRange = useSelector(percentRangeSelector);
  return (
    <>
      <div className="h-[2px] flex-1 w-full rounded-lg appearance-none cursor-pointer range-sm m-0 bg-slate-500 relative">
        <div
          className="absolute w-2 h-2 bg-white rounded-full top-[-3px]"
          style={{
            left: `${percentRange}%`,
          }}
        ></div>
        <div
          className={`absolute left-0 h-[2px] bg-white`}
          style={{
            width: `${percentRange}%`,
          }}
        ></div>
      </div>
    </>
  );
}

export default Range;
