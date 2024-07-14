import { ADD_TO_LIST, REMOVE_FROM_LIST } from "../actions";

const initialState = {
  list: [], // iniziamo con un array vuoto perché content riceverà un array dal nostro reducer
};

const addRemoveListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LIST:
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case REMOVE_FROM_LIST:
      return {
        ...state,
        // content: state.cart.content.slice(0, action.payload).concat(state.cart.content.slice(action.payload + 1))
        //   content: [...state.cart.content.slice(0, action.payload), ...state.cart.content.slice(action.payload + 1)]
        list: state.list.filter(song => song.id !== action.payload.id),
        // ❌ da non usare assolutamente metodi che mutano: es. splice!
      };

    default:
      return state;
  }
};

export default addRemoveListReducer;
