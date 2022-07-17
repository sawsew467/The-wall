import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFavouriteList, updatePlayList } from "../redux/actions";
import { favouriteListSelector, playListSelector } from "../redux/selector";

function SongItem(props) {
  const info = props.info;
  const index = props.index + 1;
  const [isFavouriteItem, setFavouriteItem] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [favouriteList, setFavouriteList] = useState(
    useSelector(favouriteListSelector)
  );
  const [playList, setPlayList] = useState(
    useSelector(playListSelector)
  );
  const dispath = useDispatch();
  const addFavoriteItem = () => {
    setFavouriteItem(!isFavouriteItem);
    favouriteList.push(info);
    dispath(updateFavouriteList(favouriteList));
  };
  const removeFavoriteItem = () => {
    setFavouriteItem(!isFavouriteItem);
    for (let i = 0; i < favouriteList.length; i++) {
      if (favouriteList[i].id === info.id) {
        favouriteList.splice(i, 1);
      }
    }
    dispath(updateFavouriteList(favouriteList));
  };
  const addPlayList = () => {
    setIsAdded(!isAdded);
    playList.push(info);
    dispath(updatePlayList(playList));
  }
  const itemClicked = favouriteList.filter((item) => item.id === info.id)[0];
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <span className="text-lg text-[#AFAFAF]">
            {index < 10 ? `0${index}` : `${index}`}
          </span>
          <img
            alt=""
            src={require("../assets/images/" + info.img + ".png")}
            className="w-12 h-12 object-cover"
          ></img>
          <div className="flex flex-col">
            <p className="text-lg">{`${info.nameEn} - ${info.nameVi}`}</p>
            <p className="text-md text-[#AFAFAF]">The Soul of Rock</p>
          </div>
        </div>
        <div className="flex items-center gap-8 text-[#AFAFAF]">
          <span className="text-md">3:46</span>
          {itemClicked !== undefined ? (
            <i
              className="fa-solid fa-heart text-md hover:text-white cursor-pointer transition-all"
              onClick={removeFavoriteItem}
            ></i>
          ) : (
            <i
              className="fa-regular fa-heart text-md hover:text-white cursor-pointer transition-all"
              onClick={addFavoriteItem}
            ></i>
          )}
          <i className="fa-solid fa-plus text-md hover:text-white cursor-pointer transition-all" onClick={addPlayList}></i>
        </div>
      </div>
    </>
  );
}

export default SongItem;
