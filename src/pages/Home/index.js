import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HTTP from "axios";
// Store
import { useSelector, useDispatch } from "react-redux";
import { setMovieList, addMovieToWatched,addMovieToFav } from "../../store/movie";
import Layout from "../../layout/Layout";
import Search from "../../components/Search";
import MovieListHeading from "../../components/MovieListHeading";
import MovieList from "../../components/MovieList";
import AddtoFavorite from "../../components/AddtoFavorite";
import AddWatch from "../../components/AddWatch";
import RemoveWatch from "../../components/MovieListHeading";
import RemoveMovie from "../../components/RemoveMovie";
import "./index.css";

const Home = () => {
  const [searchmovie, setSerchmovie] = useState("a");
  const [favourites, setFavourites] = useState([]);
  const [watchList, setWatchList] = useState([]);

  const movieList = useSelector((state) => state.movie.value.movieList);
  const watched = useSelector((state) => state.movie.value.watchedList);
  const faved = useSelector((state) => state.movie.value.favList);
  console.log(watched);
  const dispatch = useDispatch();

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=cfb6b1ce8dc733868dda06c7f2458ca3&query=${searchmovie}`;
    HTTP.get(url).then((res) => {
      dispatch(setMovieList(res.data.results));
    });
  }, [searchmovie]);

  useEffect(() => {
    const movieFav = JSON.parse(localStorage.getItem("favMovie"));
    if (movieFav) {
      setFavourites(movieFav);
    }
  }, []);

  useEffect(() => {
    const listWatch = JSON.parse(localStorage.getItem("WatchList"));
    if (listWatch) {
      setWatchList(listWatch);
    }
  }, [watchList]);

  const saveToLocalStorage = (Movie) => {
    localStorage.setItem("favMovie", JSON.stringify(Movie));
    localStorage.setItem("Watchlist", JSON.stringify(Movie));
  };

  const addViewed = (movie) => {
    dispatch(addMovieToWatched(movie));
  };

  const addFavouriteMovie = (movie) => {       
    const newList = [...favourites, movie];
    const filter = favourites.filter(
      (arrElement) => arrElement.id === movie.id
    );
    if (filter.length > 0) {
      return window.alert("you have already added this movie");
    } else {
      setFavourites(newList);   
      saveToLocalStorage(newList);
    }
  };

  const removeFavouriteMovie = (movie) => {
    const newList = favourites.filter((favourite) => favourite.id !== movie.id);
    setFavourites(newList);
    saveToLocalStorage(newList);
  };

  const addWatchList = (movie) => {
    const newList = [...watchList, movie];
    const filter = watchList.filter((arrElement) => arrElement.id === movie.id);
    if (filter.length > 0) {
      return window.alert("you have already added this movie");
    } else {
      setWatchList(newList);
      saveToLocalStorage(newList);
    }
  };

  const removeWatchList = (movie) => {
    const newList = watchList.filter((watch) => watch.id !== movie.id);
    setWatchList(newList);
    saveToLocalStorage(newList);
  };
  return (
    <>
      <Layout>
        <div className="container-fluid movie-app">
          <div>
            <Search searchmovie={searchmovie} setSerchmovie={setSerchmovie} />
          </div>
          <div>
            <MovieListHeading heading="Recently Viewed" />
          </div>
          <div className="row">
            <MovieList
              number="1"
              movies={watched}
              className="img"
              handelViewedClick={addViewed}
              handelFavouriteClick={addFavouriteMovie}
              favouriteComponent={AddtoFavorite}
              handelWatchClick={addWatchList}
              WatchComponent={AddWatch}
            />
          </div>
          <div>
            <MovieListHeading heading="Movies" />
          </div>
          <div className="row">
            <MovieList
              number="2"
              movies={movieList}
              className="img"
              handelViewedClick={addViewed}
              handelFavouriteClick={addFavouriteMovie}
              favouriteComponent={AddtoFavorite}
              handelWatchClick={addWatchList}
              WatchComponent={AddWatch}
            />
          </div>
          <div>
            <MovieListHeading heading="Favourite Movies" />
          </div>
          <MovieList
            number="3"
            movies={favourites}
            handelFavouriteClick={removeFavouriteMovie}
            favouriteComponent={RemoveMovie}
            handelWatchClick={removeWatchList}
            WatchComponent={RemoveWatch}
          />
        </div>
      </Layout>
    </>
  );
};

export default Home;
