import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    value: {
      movieList: [],
      viewedList: [],
      watchList: [],
      favList: []
    }
  },
  reducers: {
    // set list
    setMovieList: (state, action) => {
      state.value.movieList = action.payload;
    },
    setViewedList: (state, action) => {
      state.value.viewedList = action.payload;
    },
    setWatchList: (state, action) => {
      state.value.watchList = action.payload
    },
    setFavList: (state, action) => {
      state.value.favList = action.payload
    },
    // add value
    addMovieToViewedList: (state, action) => {
      state.value.viewedList.push(action.payload);
    },
    addMovieToFavList:(state,action)=>{
      state.value.favList.push(action.payload);
    },
    addMovieToWatchList: (state, action) => {
      state.value.watchList.push(action.payload);
    }
  }
});

export const {
  setMovieList, setViewedList, setWatchList, setFavList, addMovieToViewedList, addMovieToFavList,
  addMovieToWatchList
} = movieSlice.actions;
export default movieSlice.reducer;