import MovieList from "@/components/MovieList.tsx";
import { useEffect, useState } from "react";

const Movies = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try{
                const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=fe6f91141dc11330e2584f6222d8d12a`)
                const data = await res.json()
                setMovies(data.results)
            } catch (error){
                console.log(error);
            }
        }

        fetchMovies();
    }, []);

    return (
        <MovieList movies={movies} />
    )
}

export default Movies