import MainLayout from "@/layouts/MainLayout.tsx";
import {FavoritesProvider} from "@/context/FavoritesContext.tsx";
import React from "react";
import {MoviesProvider} from "@/context/MoviesContext.tsx";

const App = () => {
  return (
    <>
        <React.StrictMode>
            <FavoritesProvider>
                <MoviesProvider>
                    <MainLayout />
                </MoviesProvider>
            </FavoritesProvider>
        </React.StrictMode>
    </>
  );
};
export default App;
