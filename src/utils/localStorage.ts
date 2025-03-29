export const saveFavorites = (favorites: number[]) => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
}

export const getFavorites = (): number[] => {
    try {
        const data = localStorage.getItem("favorites");
        const parsed = data ? JSON.parse(data) : [];
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }}
