const initState = {
  showSettings: false,
  albumDisplay: "",
  favouriteList: [],
  playList: [],
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
      return {
        ...state,
        playList: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
