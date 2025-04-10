import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store.ts";
import {toggleTheme} from "@/redux/themeSlice.ts";

const ThemeToggle = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.theme.mode)

    return (
        <button
            onClick={() => {dispatch(toggleTheme())}}
            className="p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white hover:shadow">
            Switch to {theme === "dark" ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
    )
}

export default ThemeToggle;