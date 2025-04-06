import SingleMovie from "@/components/SingleMovie.tsx";
import {useEffect, useMemo, useState} from "react";
import CheckboxComponent from "@/components/CheckboxComponent.tsx";
import Modal from "@/components/Modal.tsx";

interface MovieListProps {
    movies: Movie[]
}

const MOVIES_PER_PAGE = 4

const MoviesList = ({movies = []}: MovieListProps) => {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

    const ratings = [4, 5, 6, 7]
    const [selectedRatings, setSelectedRatings] = useState<number[]>([]);

    const filteredMovies = useMemo(() => { //Optimizes movie filtering for bigger loads
        let result = movies;

        if (search.length > 0) {
            result = result.filter(movie =>
                movie.title.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (selectedRatings.length > 0) {
            result = result.filter(movie =>
                selectedRatings.some(r => movie.vote_average >= r)
            )
        }

        return result;
    }, [movies, search, selectedRatings]);

    const indexOfLastMovie = currentPage * MOVIES_PER_PAGE;
    const indexOfFirstMovie = indexOfLastMovie - MOVIES_PER_PAGE;

    const totalPages = Math.ceil(filteredMovies.length / MOVIES_PER_PAGE);

    const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

    const handleRatingChange = (ratings: number[]) => {
        setSelectedRatings(ratings);
    }

    useEffect(() => {
        setCurrentPage(1)
    }, [search, selectedRatings]) //Refresh pagination to page 1 when search and rating filter are changed

    return (
        <>
            <input
                type="text"
                placeholder="Search by title"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mb-4 p-2 border rounded w-full"/>

            <p className="mb-4 p-2 border rounded w-full">Pick rating:</p>
            <CheckboxComponent values={ratings} onChange={handleRatingChange}/>

            <div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {currentMovies.length > 0 ? currentMovies.map((movie) => (
                        <SingleMovie key={movie.id} movie={movie} onClick={() => setSelectedMovie(movie)}/>
                    ))
                    :
                    (
                        <p className="text-center col-span-full text-gray-500 text-lg">
                            No movies match your search or filters.
                        </p>
                    )}
            </div>

            {filteredMovies.length > 0 ?
            <div className="flex justify-center items-center gap-4 mt-6">
                <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded-lg shadow-md text-white transition
                        ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
                >
                    Previous
                </button>
                <span className="text-lg font-medium">
                    Page <span className="text-blue-600">{currentPage}</span> of {totalPages}
                </span>
                <button
                    onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-lg shadow-md text-white transition
                    ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
                >
                    Next
                </button>
            </div>
            : ""}

            <Modal isOpen={!!selectedMovie} onClose={() => setSelectedMovie(null)}>
                {selectedMovie &&
                    <div>
                        <h2 className="text-xl font-bold mb-2">{selectedMovie.title}</h2>
                        <p>{selectedMovie.overview}</p>
                    </div>
                }
            </Modal>
        </>
    )
}

export default MoviesList