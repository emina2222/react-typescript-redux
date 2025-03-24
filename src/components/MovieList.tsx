import SingleMovie from "@/components/SingleMovie.tsx";
import {useState} from "react";

interface MovieListProps {
    movies: Movie[]
}

const MoviesList = ({ movies = [] }: MovieListProps) => {
    const [search, setSearch] = useState("");

    let filteredMovies = movies
    if(search.length > 0){
        filteredMovies = movies.filter(movie =>
            movie.title.toLowerCase().includes(search.toLowerCase())
        );
    }

    return (
        <>
            <input
            type="text"
            placeholder="Search by title"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-4 p-2 border rounded w-full"/>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                { filteredMovies.map((movie) => (
                    <SingleMovie key = { movie.id } movie={ movie } />
                ))}
            </div>
        </>
    )
}

export default MoviesList