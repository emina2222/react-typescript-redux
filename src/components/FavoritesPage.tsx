import {useFavorites} from "@/context/FavoritesContext.tsx";
import MovieList from "@/components/MovieList.tsx";
import {useMovies} from "@/context/MoviesContext.tsx";

const FavoritesPage = () => {
    const { favorites } = useFavorites()
    const { movies } = useMovies()

    const favoriteMovies = movies.filter((movie) => favorites.includes(movie.id))

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Your Favorite Movies</h2>
            <MovieList movies={favoriteMovies}/>
        </div>
    )
}

export default FavoritesPage;