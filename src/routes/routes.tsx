import App from "@/App";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Profile from "@/pages/Profile.tsx";
import Movies from "@/pages/Movies.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> }, //index:true when hit / it's got to this page
      { path: "profile", element: <Profile /> },
      { path: "movies", element: <Movies /> }
    ],
  },
]);
export default router;
