import { Outlet, Link } from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store.ts";
import ThemeToggle from "@/components/ThemeToggle.tsx";

const MainLayout = () => {
    const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
        <div className="flex justify-end p-4 px-4 py-2 rounded-lg
                 bg-gray-100 text-gray-900
                 dark:bg-gray-700 dark:text-white
                 hover:bg-gray-200 dark:hover:bg-gray-600
                border border-gray-300 dark:border-gray-500
                transition-all">
            <ThemeToggle />
        </div>
        <nav className="bg-gray-800 p-4 justify-center">
            <ul className="flex gap-4 text-white font-semibold">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/movies">Movies</Link></li>
            </ul>
        </nav>
        <main>
            <Outlet />
        </main>
    </div>
  );
};

export default MainLayout;
