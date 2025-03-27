import SingleMovie from "@/components/SingleMovie.tsx";
import {useState} from "react";
import CheckboxComponent from "@/components/CheckboxComponent.tsx";

interface MovieListProps {
    movies: Movie[]
}

const MoviesList = ({ movies = [] }: MovieListProps) => {
    const [search, setSearch] = useState("");

    const ratings = [4, 5, 6, 7]
    const [selectedRatings, setSelectedRatings] = useState<number[]>([]);

    let filteredMovies = movies
    if(search.length > 0){
        filteredMovies = filteredMovies.filter(movie =>
            movie.title.toLowerCase().includes(search.toLowerCase())
        );
    }

    if(selectedRatings.length > 0){
        filteredMovies = filteredMovies.filter(movie =>
            selectedRatings?.some(r => movie.vote_average >= r)
        )
    }

    const handleRatingChange = (ratings: number[]) => {
        setSelectedRatings(ratings);
    }

    return (
        <>
            <input
            type="text"
            placeholder="Search by title"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-4 p-2 border rounded w-full"/>

            <p className="mb-4 p-2 border rounded w-full">Pick rating:</p>
            <CheckboxComponent values={ ratings } onChange={ handleRatingChange } />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                { filteredMovies.length > 0 ?  filteredMovies.map((movie) => (
                    <SingleMovie key = { movie.id } movie={ movie } />
                )) :
                "No movies found" }
            </div>
        </>
    )
}

export default MoviesList