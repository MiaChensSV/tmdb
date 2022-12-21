import HTTP from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setMovieList } from "../store/movie";

export default function Search(props) {

  // variables
  const [keyword, setKeyword] = useState('a');
  const dispatch = useDispatch();

  // event handelers
  const updateKeyword = (input) => {
    setKeyword(input);
  }

  const getMovieList = () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=cfb6b1ce8dc733868dda06c7f2458ca3&query=${keyword}`;
    HTTP.get(url).then((res) => {
      dispatch(setMovieList(res.data.results));
    });
  };

  return (
    <form>
      <input placeholder="type to search" value={keyword} onChange={ event => updateKeyword(event.target.value)} />
      <button onClick={() => getMovieList()}>search</button>
    </form>
  );
}
