import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface WatchlistState {
    movies: Movie[];
}

const initialState: WatchlistState = {
    movies: [],
};

export const watchlistSlice = createSlice({
    name: "watchlist",
    initialState: initialState,
    reducers: {
        addToWatchlist: (state, action: PayloadAction<Movie>) => {
            const exists = state.movies.find(m => m.id === action.payload.id);
            if (!exists) {
                state.movies.push(action.payload);
            }
        },
        removeFromWatchlist: (state, action: PayloadAction<number>) => {
            const exists = state.movies.find(m => m.id === action.payload);
            if (exists) {
                state.movies = state.movies.filter(m => m.id !== action.payload);
            }
        },
    }
})

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;
