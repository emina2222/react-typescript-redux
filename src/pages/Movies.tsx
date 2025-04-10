import MovieList from "@/components/MovieList.tsx";
import {useMovies} from "@/context/MoviesContext.tsx";
import ShimmerCard from "@/components/ShimmerCard.tsx";
import {useEffect, useState} from "react";

const Movies = () => {
    const { movies, isLoading } = useMovies()
    const [delayedLoad, setDelayedLoad] = useState(true)

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if(!isLoading){
            timeout = setTimeout(() => {
                setDelayedLoad(false)
            }, 1000)
        }
        else {
            setDelayedLoad(true)
        }

        return () => clearTimeout(timeout)
    }, [isLoading])

    return (
        delayedLoad ?
            Array.from({ length: 6 }).map((_, index) => <ShimmerCard key={index} />)
            : <MovieList movies={movies} />
    )
}

export default Movies