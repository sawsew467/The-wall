import React from "react";
import { useSelector } from "react-redux";
import { percentRangeSelector } from "../redux/selector";
import { useDispatch } from "react-redux";
import { setPercentRange } from "../redux/actions";

function Range() {
  const percentRange = useSelector(percentRangeSelector);
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    dispatch(setPercentRange(e.target.value));
    // console.log(e.target.value);
  }
  return (
    <>
      <div className="h-[2px] flex-1 w-full rounded-lg appearance-none cursor-pointer range-sm m-0 bg-slate-500 relative">
        <input
          type="range"
          className="flex-1 range absolute"
          value={percentRange}
          onChange={handleOnChange}
        ></input>
        <div
          className={`absolute left-0 h-[4px] bg-white`}
          style={{
            width: `${percentRange}%`,
          }}
        ></div>
      </div>
    </>
  );
}

export default Range;
