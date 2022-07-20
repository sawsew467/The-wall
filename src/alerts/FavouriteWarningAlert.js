import React from "react";

function FavouriteWarningAlert(props) {
  const confirmHandle = () => {
    props.parentCallback(true);
  };
  const rejectHandle = () => {
    props.parentCallback(false);
  };
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/80 z-50">
        <div className="flex flex-col items-center bg-white rounded-xl p-8">
          <i className="fa-solid fa-triangle-exclamation text-yellow-400 text-[6rem] mb-4"></i>
          <p className="text-lg text-black">
            Your playlist will be removed and replaced by this Album
          </p>
          <p className="text-md text-slate-600">Are you sure to procced?</p>
          <div className="flex justify-between w-7/12 mt-6">
            <button
              className="text-lg bg-white py-1 px-8 rounded-full border-2 border-yellow-400 text-yellow-400"
              onClick={rejectHandle}
            >
              No
            </button>
            <button
              className="text-lg bg-yellow-400 py-1 px-8 rounded-full"
              onClick={confirmHandle}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FavouriteWarningAlert;
