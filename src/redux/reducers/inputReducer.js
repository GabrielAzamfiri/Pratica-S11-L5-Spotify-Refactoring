import { CHANGE_INPUT_VALUE } from "../actions";

const initialState = {
  inputValue: "",
};

const selectedSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload,
      };

    default:
      return state;
  }
};

export default selectedSongReducer;
