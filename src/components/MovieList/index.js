import React, { useEffect, useState } from "react";
import "./MovieList.css";
import { useDispatch } from "react-redux";
import { addMovieToFavList, addMovieToViewedList, addMovieToWatchList } from "../../store/movie";

const MovieList = (props) => {

  // viariables
  const dispatch = useDispatch();
  const listType = props.listType ? props.listType : 'OtherList';
  const [ifRenderAddFav, setIfRenderAddFav] = useState(false);
  const [ifRenderAddWatch, setIfRenderAddWatch] = useState(false);
  const [ifRenderDeleteFav, setIfRenderDeleteFav] = useState(false);

  // event listeners
  const addViewed = (movie) => {
    dispatch(addMovieToViewedList(movie));
  };
  const addFav = (movie) => {       
    dispatch(addMovieToFavList(movie))
  };
  const addWatch = (movie) => {
    dispatch(addMovieToWatchList(movie))
  };
  const deleteFav = (movie) => {

  }

  // setup runder option
  useEffect(() => {
    if (listType === 'FavList'){
      setIfRenderAddWatch(true);
      setIfRenderDeleteFav(true)
    } else if (listType === 'ViewedList') {
    } else {
      setIfRenderAddFav(true);
      setIfRenderAddWatch(true);
    }
  }, [listType]);

  return (
    <div className="img-container ">
      {props.movies.map((movie, index) => (
        <div className="row-container" key={index} >
          <div onClick={() => addViewed(movie)}>
            <img
              src={ `https://image.tmdb.org/t/p/w200${movie.poster_path}` }
              alt="movie"
              key={index}
              className="img"
            ></img>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="orange"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <span>{movie.vote_average}</span>
              <p>{movie.original_title}</p>
            </div>
          </div>
          {
            ifRenderAddFav ? (
              <div className="add-fav" onClick={() => addFav(movie)}>
                Add To Favorite
              </div>
            ) : null
          }
          {
            ifRenderAddWatch ? (
              <div className="add-watch" onClick={() => addWatch(movie)}>
                Add To Watch List
              </div>
            ) : null
          }
          {
            ifRenderDeleteFav ? (
              <div className="delete-fav" onClick={() => deleteFav(movie)}>
                Delete
              </div>
            ) : null
          }
        </div>
      ))}
    </div>
  );
}

export default MovieList;