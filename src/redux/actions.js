export const setShowSettings = (data) => {
    return {
        type: "showSettings/setShowSettings",
        payload: data,
    }
}
export const setAlbumDisplay = (data) => {
    return {
        type: "albumDisplay/setAlbumDisplay",
        payload: data,
    }
}
export const updateFavouriteList = (data) => {
    return {
        type: "favouriteList/updateFavouriteList",
        payload: data,
    }
}
export const updatePlayList = (data) => {
    return {
        type: "playList/updatePlayList",
        payload: data,
    }
}
export const setCurrentSong = (data) => {
    return {
        type: "currentSong/setCurrentSong",
        payload: data,
    }
}
export const setIsPlaying = (data) => {
    return {
        type: "isPlaying/setIsPlaying",
        payload: data,
    }
}
export const setPercentRange = (data) => {
    return {
        type: "percentRange/setPercentRange",
        payload: data,
    }
}
export const setTimeProgress = (data) => {
    return {
        type: "timeProgress/setTimeProgress",
        payload: data,
    }
}