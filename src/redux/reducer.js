import rockxuyenmandem from "../assets/audio/ALBUM_TAM HON CUA DA/ROCK XUYEN MAN DEM.mp3";

const initState = {
  showSettings: false,
  albumDisplay: "",
  favouriteList: [],
  playList: [],
  currentSong: {
    id: "s000001",
    nameEn: "Rock through the night",
    nameVi: "Rock xuyên màn đêm",
    album: "a000001",
    img: "Tâm hồn của đá",
    // src: rockxuyenmandem,
    time: "3:46",
  },
  isPlaying: false,
  percentRange: 0,
  timeProgress: 0,
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
    case "isPlaying/setIsPlaying":
      return {
        ...state,
        isPlaying: action.payload,
      };
    case "percentRange/setPercentRange":
      return {
        ...state,
        percentRange: action.payload,
      };
    case "timeProgress/setTimeProgress":
      return {
        ...state,
        timeProgress: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
