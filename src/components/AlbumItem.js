import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setAlbumDisplay } from "../redux/actions";

function AlbumItem(props) {
  const infoAlbum = props.infoAlbum;
  const dispatch = useDispatch();
  const handleAlbumDetailClick = () => {
    // window.localStorage.setItem("idAlbumDisplay", infoAlbum.id);
    dispatch(setAlbumDisplay(infoAlbum.id));
  };
  return (
    <>
      <div className="w-full flex gap-4">
        <img
          alt=""
          src={require("../assets/images/" + infoAlbum.img + ".png")}
          className="w-1/4"
        ></img>
        <div className="w-3/4 flex flex-col justify-end gap-1">
          <p className="text-xl">{`${infoAlbum.nameEn} - ${infoAlbum.nameVn} (${infoAlbum.released})`}</p>
          <p className="text-md w-full overflow-paragraph">{infoAlbum.desc}</p>
          <Link
            to="/albumdetail"
            className="inline"
            onClick={handleAlbumDetailClick}
          >
            <p className="underline">Read more...</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AlbumItem;
