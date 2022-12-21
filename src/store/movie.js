import { createSlice } from '@reduxjs/toolkit';
import HTTP from 'axios';

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    value: {
      movieList: [],
      watchedList: [],
      favList: []
    }
  },
  reducers: {
    setMovieList: (state, action) => {
      state.value.movieList = action.payload;
    },
    addMovieToWatched: (state, action) => {
      state.value.watchedList.push(action.payload);
    },
    addMovieToFav:(state,action)=>{
      state.value.favList.push(action.payload);
    }
  }
});

export const { setMovieList, addMovieToWatched,addMovieToFav } = movieSlice.actions;
export default movieSlice.reducer;