import { combineReducers, configureStore } from "@reduxjs/toolkit";

import selectedSongReducer from "../reducers/selectedSongReducer";
import inputReducer from "../reducers/inputReducer";
import fetchReducer from "../reducers/fetchReducer";

const rootReducer = combineReducers({
  selectedSong: selectedSongReducer,
  valueInput: inputReducer,
  fetchResponse: fetchReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
