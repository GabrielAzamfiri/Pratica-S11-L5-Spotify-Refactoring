import { SELECT_SONG } from "../actions";

const initialState = {
  selectedSong: null, // iniziamo con un array vuoto perché content riceverà un array dal nostro reducer
};

const selectedSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SONG:
      return {
        ...state,
        selectedSong: action.payload,
      };

    default:
      return state;
  }
};

export default selectedSongReducer;
