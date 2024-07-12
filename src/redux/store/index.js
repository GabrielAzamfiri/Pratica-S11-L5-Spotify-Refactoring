import { combineReducers, configureStore } from "@reduxjs/toolkit";

import selectedSongReducer from "../reducers/selectedSongReducer";

const rootReducer = combineReducers({
  selectedSong: selectedSongReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
