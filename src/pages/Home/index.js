import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HTTP from "axios";
// Store
import { useSelector, useDispatch } from "react-redux";
import { setMovieList } from "../../store/movie";
import Layout from "../../layout/Layout";
import Search from "../../components/Search";
import MovieListHeading from "../../components/MovieListHeading";
import MovieList from "../../components/MovieList";

import "./style.css";

const Home = () => {

  // set variables
  const [searchmovie, setSerchmovie] = useState("a");
  const movieList = useSelector((state) => state.movie.value.movieList);
  const favList = useSelector(state => state.movie.value.favList);
  const viewedList = useSelector(state => state.movie.value.viewedList);
  const dispatch = useDispatch();

  // fetch data
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=cfb6b1ce8dc733868dda06c7f2458ca3&query=${searchmovie}`;
    HTTP.get(url).then((res) => {
      dispatch(setMovieList(res.data.results));
    });
  }, [searchmovie, dispatch]);

  return (
    <>
      <Layout>
        <div className="container-fluid movie-app">
          <div>
            <Search searchmovie={searchmovie} setSerchmovie={setSerchmovie} />
          </div>
          <div>
            <MovieListHeading heading="Search Results: " />
          </div>
          <div className="row">
            <MovieList
              listType="MovieList"
              movies={movieList}
            />
          </div>
          <div>
            <MovieListHeading heading="Favourite Movies: " />
          </div>
          <div className="row">
            <MovieList
              listType="FavList"
              movies={favList}
            />
          </div>
          <div>
            <MovieListHeading heading="Recently Viewed Movies: " />
          </div>
          <MovieList
            listType="ViewedList"
            movies={viewedList}
          />
        </div>
      </Layout>
    </>
  );
};

export default Home;
