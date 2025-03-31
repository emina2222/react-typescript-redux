import MovieList from "@/components/MovieList.tsx";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store.ts";

const WatchlistPage = () => {
    const watchlist = useSelector((state: RootState) => state.watchlist.movies)

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Your watchlist</h2>
            <MovieList movies={ watchlist } />
        </div>
    )
}

export default WatchlistPage
