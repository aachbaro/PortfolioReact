import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";
import DrawingPage from "./DrawingPage";
import MusicPage from "./MusicPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/drawings">Dessins</Link>
          <Link to="/music">Musique</Link>
        </nav>
        <HomePage />
      </div>
    ),
  },
  {
    path: "/drawings",
    element: (
      <div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/drawings">Dessins</Link>
        <Link to="/music">Musique</Link>
      </nav>
      <DrawingPage />
      </div>
    ),
  },
  {
    path: "/music",
    element: (
      <div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/drawings">Dessins</Link>
        <Link to="/music">Musique</Link>
      </nav>
      <MusicPage />
      </div>
    ),
  },
]);

const NavBar: React.FC = () => {
  return (
    <div className="NavBar">
      <h1>Pascuans</h1>
      <RouterProvider router={router} />
    </div>
  );
};

export default NavBar;
