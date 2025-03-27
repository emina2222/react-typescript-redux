interface MovieProps {
    movie: Movie
}

const SingleMovie = ({ movie }: MovieProps) => {
    return (
        <div key={movie.id} className="bg-white rounded shadow p-2">
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}?api_key=fe6f91141dc11330e2584f6222d8d12a`}
                alt={movie.title}
                className="rounded" />
            <h2 className="text-lg font-semibold mt-2">{movie.title}</h2>
            <p>{movie.vote_average}</p>
            <p className="text-sm text-gray-600">{movie.overview.slice(0, 100)}...</p>
        </div>
    )
}

export default SingleMovie