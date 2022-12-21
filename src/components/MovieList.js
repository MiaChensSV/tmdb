import React from "react";
import "./MovieList.css";
const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  const WatchComponent = props.WatchComponent;

  return (
    <div className="img-container ">
      {props.movies.map((movie, index) => (
        <div className="row-container" key={index} >
          <div onClick={() => props.handelViewedClick(movie)}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
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
          <div
            onClick={() => props.handelFavouriteClick(movie)}
            className="favorite"
          >
            {" "}
            <FavouriteComponent />
          </div>

          <div
            className="add-to-watchlist"
            onClick={() => props.handelWatchClick(movie)}
          >
            <WatchComponent />
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;