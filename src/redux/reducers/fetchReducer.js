import { HIPHOP, POP_CULTURE, ROCK_CLASSIC, SEARCH_INPUT } from "../actions";

const initialState = {
  list1: [],
  list2: [],
  list3: [],
  search: [],
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROCK_CLASSIC:
      return {
        ...state,
        list1: action.payload,
      };

    case POP_CULTURE:
      return {
        ...state,
        list2: action.payload,
      };
    case HIPHOP:
      return {
        ...state,
        list3: action.payload,
      };
    case SEARCH_INPUT:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default fetchReducer;
