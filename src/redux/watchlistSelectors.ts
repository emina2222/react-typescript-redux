import {RootState} from "@/redux/store.ts";

export const isOnWatchlist = (state: RootState, id: number): boolean => {
    return state.watchlist.movies.some(m => m.id === id);
}
