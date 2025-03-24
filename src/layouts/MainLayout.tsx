import { Outlet, Link } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
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
