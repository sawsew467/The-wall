const initState = {
  showSettings: false,
  albumDisplay: "",
  favouriteList: [],
  playList: [],
  currentSong: {},
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "showSettings/setShowSettings":
      return {
        ...state,
        showSettings: action.payload,
      };
    case "albumDisplay/setAlbumDisplay":
      return {
        ...state,
        albumDisplay: action.payload,
      };
    case "favouriteList/updateFavouriteList":
      return {
        ...state,
        favouriteList: action.payload,
      };
    case "playList/updatePlayList":
      let newplayList = [];
      newplayList = action.payload.filter(function (element) {
        return newplayList.includes(element) ? "" : newplayList.push(element);
      });
      return {
        ...state,
        playList: newplayList,
      };
    case "currentSong/setCurrentSong":
      return {
        ...state,
        currentSong: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
