import React, {createContext, useContext, useEffect, useState} from "react";

type MoviesContextType = {
    movies: Movie[];
    isLoading: boolean;
};

export const MoviesContext = createContext<MoviesContextType>({
    movies: [],
    isLoading: true,
})

export const MoviesProvider = ({ children }: { children: React.ReactNode }) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try{
                const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=fe6f91141dc11330e2584f6222d8d12a`)
                const data = await res.json()
                setMovies(data.results)
            } catch (error){
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchMovies()
    }, [])

    return (
        <MoviesContext.Provider value={{ movies, isLoading }}>
            {children}
        </MoviesContext.Provider>
    )
}

export const useMovies = () => useContext(MoviesContext)