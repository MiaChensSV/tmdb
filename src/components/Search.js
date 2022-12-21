import HTTP from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setMovieList } from "../store/movie";

export default function Search() {

  // variables
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();

  const getMovieList = () => {
    console.log(keyword.length);
    if (keyword.length > 0) {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=cfb6b1ce8dc733868dda06c7f2458ca3&query=${keyword}`;
      HTTP.get(url).then((res) => {
        dispatch(setMovieList(res.data.results));
      });
    }
  };

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=cfb6b1ce8dc733868dda06c7f2458ca3&query=a`;
    HTTP.get(url).then((res) => {
      dispatch(setMovieList(res.data.results));
    });
  }, [dispatch]);

  return (
    <form onClick={event => event.preventDefault()}>
      <input placeholder="type to search" value={keyword} onChange={event => setKeyword(event.target.value)} />
      <button onClick={() => getMovieList()}>search</button>
    </form>
  );
}
