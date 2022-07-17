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