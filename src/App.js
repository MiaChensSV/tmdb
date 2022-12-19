import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import Search from "./components/Search";
import "./App.css";
import AddtoFavorite from "./components/AddtoFavorite";
import RemoveMovie from "./components/RemoveMovie";
import AddWatch from "./components/AddWatch";
import RemoveWatch from "./components/RemoveWatch";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchmovie, setSerchmovie] = useState("a");
  const [favourites, setFavourites] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [view, setView] = useState([]);
  const url = `https://api.themoviedb.org/3/search/movie?api_key=cfb6b1ce8dc733868dda06c7f2458ca3&query=${searchmovie}`;

  const getmovies = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };
  useEffect(() => {
    getmovies();
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
    const newView = [...view, movie];
      setView(newView);
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
    <Router>
      <div className="container-fluid movie-app">
        <div>
          <Navbar />
          <Search searchmovie={searchmovie} setSerchmovie={setSerchmovie} />
        </div>
        <div>
          <MovieListHeading heading="Recently Viewed" />
        </div>
        <div className="row">
          <MovieList movies={view} className="img" 
          handelViewedClick={addViewed}/>
        </div>
        <div>
          <MovieListHeading heading="Movies" />
        </div>
        <div className="row">
          <MovieList
            movies={movies}
            className="img"
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
          movies={favourites}
          handelFavouriteClick={removeFavouriteMovie}
          favouriteComponent={RemoveMovie}
          handelWatchClick={removeWatchList}
          WatchComponent={RemoveWatch}
        />
      </div>
    </Router>
  );
}

export default App;
