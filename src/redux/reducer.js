const initState = {
  showSettings: false,
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "showSettings/setShowSettings":
      return {
        ...state,
        showSettings: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
