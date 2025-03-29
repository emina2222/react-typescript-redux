import {Button} from "@/components/Button.tsx";
import {useFavorites} from "@/context/FavoritesContext.tsx";

interface MovieProps {
    movie: Movie
}

const SingleMovie = ({ movie }: MovieProps) => {
    const { toggleFavorites, isFavorite } = useFavorites();
    const favorite = isFavorite(movie.id);

    return (
        <div className="bg-white rounded shadow p-2">
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}?api_key=fe6f91141dc11330e2584f6222d8d12a`}
                alt={movie.title}
                className="rounded" />
            <h2 className="text-lg font-semibold mt-2">{movie.title}</h2>
            <Button
                variant={ favorite ? "secondary" : "destructive"}
                onClick={ () => toggleFavorites(movie.id) }>
                { favorite ? "Remove from Favorites" : "Add to Favorites" }
            </Button>
            <p>{movie.vote_average}</p>
            <p className="text-sm text-gray-600">{movie.overview.slice(0, 100)}...</p>
        </div>
    )
}

export default SingleMovie