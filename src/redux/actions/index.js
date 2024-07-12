export const SELECT_SONG = "SELECT_SONG";
export const CHANGE_INPUT_VALUE = "CHANGE_INPUT_VALUE";
export const SEARCH_INPUT = "SEARCH_INPUT";

export const selectSongAction = singleSong => ({ type: SELECT_SONG, payload: singleSong });
export const changeInputValue = value => ({ type: CHANGE_INPUT_VALUE, payload: value });

export const getSongsAction = artistName => {
  return async (dispatch, getState) => {
    console.log("GET STATE", getState()); // ritorna l'intero oggetto di stato globale

    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName);
      if (response.ok) {
        let { data } = await response.json();

        dispatch({ type: SEARCH_INPUT, payload: data });
        console.log("response", data); // ritorna l'intero oggetto di stato globale
      } else {
        throw new Error("Errore nel erperimento dei dati 😥");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
