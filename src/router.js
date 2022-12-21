import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Error from './pages/Error';
import WatchList from './pages/WatchList';
import MovieDetail from "./pages/MovieDetail";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/error',
    element: <Error />
  },
  {
    path: '/watch-list',
    element: <WatchList />
  },
  {
    path: '/detail',
    element: <MovieDetail />
  }
]);

export default router;