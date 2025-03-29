import MovieList from "@/components/MovieList.tsx";
import {useMovies} from "@/context/MoviesContext.tsx";

const Movies = () => {
    const { movies } = useMovies()

    return (
        <MovieList movies={movies} />
    )
}

export default Movies