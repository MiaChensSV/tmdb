import Layout from "../../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import {
  addMovieToFavList, addMovieToWatchList,
  deleteMovieFromFavList, deleteMovieFromWatchList
} from "../../store/movie";
import { useEffect, useState } from "react";


const MovieDetail = () => {

  // variables
  const selectedMovie = useSelector(state => state.movie.value.selectedMovie);
  const watchList = useSelector(state => state.movie.value.watchList);
  const favList = useSelector(state => state.movie.value.favList);
  const [isMovieInWatchList, setIsMovieInWatchList] = useState(false);
  const [isMovieInFavList, setIsMovieInFavList] = useState(false);
  const dispatch = useDispatch();

  // check if movie in lists
  useEffect(() => {
    if (watchList.filter(el => el.id === selectedMovie.id).length > 0) {
      setIsMovieInWatchList(true);
    } else {
      setIsMovieInWatchList(false);
    }
    if (favList.filter(el => el.id === selectedMovie.id).length > 0) {
      setIsMovieInFavList(true)
    } else {
      setIsMovieInFavList(false)
    }
  }, [selectedMovie, watchList, favList]);

  // event listener 
  const addFav = () => {
    dispatch(addMovieToFavList(selectedMovie));
  };
  const addWatch = () => {
    dispatch(addMovieToWatchList(selectedMovie));
  };
  const deleteFav = () => {
    dispatch(deleteMovieFromFavList(selectedMovie));
  };
  const deleteWatch = () => {
    dispatch(deleteMovieFromWatchList(selectedMovie));
  };

  return selectedMovie ? (
    <>
      <Layout>
        <h1>{selectedMovie.original_title}</h1>
        <h3>{`Rate: ${selectedMovie.vote_average} / 10, Vote Count: ${selectedMovie.vote_count} `}</h3>
        <h3>{`Release Date: ${selectedMovie.release_date}`}</h3>
        <h3>{`Language: ${selectedMovie.original_language.toUpperCase()}`}</h3>
        <div>
          <img alt="" src={`https://image.tmdb.org/t/p/w200${selectedMovie.poster_path}`} />
        </div>
        <p>{selectedMovie.overview}</p>
        <div>
          {
            !isMovieInFavList ?
              (<button onClick={() => addFav()}> Add To Favorite </button>) :
              (<button onClick={() => deleteFav()}> Delete From Favorite </button>)
          }
          {
            !isMovieInWatchList ?
              (<button onClick={() => { addWatch() }}> Add To Watch List </button>) :
              (<button onClick={() => { deleteWatch() }}> Delete From Watch List</button>)
          }
        </div>
      </Layout>
    </>
  ) : null;
}

export default MovieDetail;