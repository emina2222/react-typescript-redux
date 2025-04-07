import SingleMovie from "@/components/SingleMovie.tsx";
import {useEffect, useMemo, useState} from "react";
import CheckboxComponent from "@/components/CheckboxComponent.tsx";
import Modal from "@/components/Modal.tsx";
import Pagination from "@/components/Pagination.tsx";
import DatePickerFilter from "@/components/DatePickerFilter.tsx";
import {parseDate} from "@/utils/utils.ts";

interface MovieListProps {
    movies: Movie[]
}

const MOVIES_PER_PAGE = 4

const MoviesList = ({movies = []}: MovieListProps) => {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

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

        if(startDate && endDate) {
            result = result.filter(movie =>
                parseDate(movie.release_date) >= startDate && parseDate(movie.release_date) <= endDate);
        }

        return result;
    }, [movies, search, selectedRatings, startDate, endDate]);

    const indexOfLastMovie = currentPage * MOVIES_PER_PAGE;
    const indexOfFirstMovie = indexOfLastMovie - MOVIES_PER_PAGE;

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

            <DatePickerFilter
                startDate={startDate}
                endDate={endDate}
                onStartDateChange={setStartDate}
                onEndDateChange={setEndDate}
            ></DatePickerFilter>

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

            {filteredMovies.length > 0 && (
                <Pagination
                    currentPage={currentPage}
                    totalItems={filteredMovies.length}
                    itemsPerPage={MOVIES_PER_PAGE}
                    onPageChange={setCurrentPage}
                />
            )}

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