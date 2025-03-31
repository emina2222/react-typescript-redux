export const saveState = (state: any) => {
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem("watchlist", serializedState);
    } catch(err){
        console.error("Could not save watchlist to localStorage", err);
    }
}

export const loadState = () => {
    try{
        const serializedState = localStorage.getItem("watchlist");
        return serializedState ? JSON.parse(serializedState) : undefined;
    } catch(err){
        console.error("Could not load watchlist from localStorage", err);
    }
}