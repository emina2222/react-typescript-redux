import React, {createContext, useContext, useEffect, useState} from "react";
import {getFavorites, saveFavorites} from "@/utils/localStorage.ts";

type FavoritesContextProps = {
    favorites: number[],
    toggleFavorites: (id: number) => void,
    isFavorite: (id: number) => boolean,
}

export const FavoritesContext = createContext<FavoritesContextProps>({
    favorites: [],
    toggleFavorites: () => {},
    isFavorite: () => false
});

export const FavoritesProvider: React.FC <{ children: React.ReactNode }> = ({children}) => {
    const [favorites, setFavorites] = useState<number[]>([]);

    useEffect(() => {
        setFavorites(getFavorites());
    }, [])

    useEffect(() => {
        saveFavorites(favorites);
    }, [favorites]); //Save favorites to the localStorage every time the favorites' state is changed

    const toggleFavorites = (id: number) => {
        setFavorites(prev =>
            prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
        );
    }

    const isFavorite = (id: number): boolean => {
        return favorites.includes(id)
    }

    return(
        <FavoritesContext.Provider value={{ favorites, toggleFavorites, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export const useFavorites = () => useContext(FavoritesContext);
