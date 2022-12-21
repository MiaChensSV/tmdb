import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Error from './pages/Error';
import WatchList from './pages/WatchList'

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
    path: '/watchList',
    element: <WatchList />
  },
]);

export default router;