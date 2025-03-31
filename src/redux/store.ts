import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from "@/redux/moviesSlice.tsx";
import watchlistReducer from "@/redux/watchlistSlice";
import {loadState, saveState} from "@/redux/localStorage.ts";
import isEqual from 'lodash/isEqual';

const preloadedState = {
  watchlist: loadState() ?? { movies: [] }
}

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    watchlist: watchlistReducer
  },
  preloadedState
});

let prev = store.getState().watchlist;

store.subscribe(() => {
  const current = store.getState().watchlist;
  if(!isEqual(current, prev)) {
    prev = current;
    saveState(current)
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
