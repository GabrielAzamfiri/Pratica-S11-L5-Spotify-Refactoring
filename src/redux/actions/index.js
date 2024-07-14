export const SELECT_SONG = "SELECT_SONG";
export const CHANGE_INPUT_VALUE = "CHANGE_INPUT_VALUE";
export const SEARCH_INPUT = "SEARCH_INPUT";
export const ROCK_CLASSIC = "ROCK_CLASSIC";
export const POP_CULTURE = "POP_CULTURE";
export const HIPHOP = "HIPHOP";
export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";
export const REMOVE_FROM_LIST = "REMOVE_FROM_LIST";
export const ADD_TO_LIST = "ADD_TO_LIST";

export const selectSongAction = singleSong => ({ type: SELECT_SONG, payload: singleSong });
export const changeInputValue = value => ({ type: CHANGE_INPUT_VALUE, payload: value });
export const addToFavoriteAction = index => ({ type: ADD_TO_FAVORITE, payload: index });
export const removeFromFavoriteAction = index => ({ type: REMOVE_FROM_FAVORITE, payload: index });
export const removeFromListAction = data => ({ type: REMOVE_FROM_LIST, payload: data });
export const addToListAction = data => ({ type: ADD_TO_LIST, payload: data });

export const getSongsAction = (artistName, actionType, typeDispatch) => {
  return async (dispatch, getState) => {
    console.log("GET STATE", getState()); // ritorna l'intero oggetto di stato globale

    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName);
      if (response.ok) {
        let { data } = await response.json();
        const arrSongs = [];
        for (let index = 0; index < 4; index++) {
          arrSongs.push(data[index]);
        }
        switch (actionType) {
          case "homeDispatch":
            dispatch({ type: typeDispatch, payload: arrSongs });
            break;
          case "searchDispatch":
            dispatch({ type: typeDispatch, payload: data });
            break;

          default:
            break;
        }

        console.log("response", data); // ritorna l'intero oggetto di stato globale
      } else {
        throw new Error("Errore nel erperimento dei dati 😥");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
