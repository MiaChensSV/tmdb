import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    value: {
      // data
      movieList: [],
      viewedList: [],
      watchList: [],
      favList: [],
      // status
      ifFavLoaded: false,
      ifViewedLoaded: false,
      ifWatchLoaded: false
    }
  },
  reducers: {
    // set status
    setIfFavLoaded: (state, action) => {
      state.value.ifFavLoaded = action.payload
    },
    setIfWatchLoaded: (state, action) => {
      state.value.ifWatchLoaded = action.payload
    },
    setIfViewedLoaded: (state, action) => {
      state.value.ifViewedLoaded = action.payload
    },
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
      const movie = action.payload;
      const favList = state.value.favList;
      if (favList.filter((el) => el.id === movie.id).length === 0) {
        state.value.favList.push(action.payload);
      }
    },
    addMovieToWatchList: (state, action) => {
      state.value.watchList.push(action.payload);
    }
  }
});

export const {
  setMovieList, setViewedList, setWatchList, setFavList, addMovieToViewedList, addMovieToFavList,
  addMovieToWatchList, setIfFavLoaded, setIfWatchLoaded, setIfViewedLoaded
} = movieSlice.actions;
export default movieSlice.reducer;