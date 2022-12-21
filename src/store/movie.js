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
      selectedMovie: null,
      // status
      ifFavLoaded: false,
      ifViewedLoaded: false,
      ifWatchLoaded: false
    }
  },
  reducers: {
    // status
    setIfFavLoaded: (state, action) => {
      state.value.ifFavLoaded = action.payload
    },
    setIfWatchLoaded: (state, action) => {
      state.value.ifWatchLoaded = action.payload
    },
    setIfViewedLoaded: (state, action) => {
      state.value.ifViewedLoaded = action.payload
    },
    // set 
    setSelectedMovie: (state, action) => {
      state.value.selectedMovie = action.payload;
    },
    setMovieList: (state, action) => {
      state.value.movieList = action.payload;
      if(action.payload.length > 0){
        state.value.currentMovie = action.payload[0];
      }
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

    // add 
    addMovieToViewedList: (state, action) => {
      const movie = action.payload;
      const viewedList = state.value.viewedList;
      if(viewedList.filter(el => el.id === movie.id).length === 0){
        state.value.viewedList.unshift(movie);
      } else {
        const index = viewedList.findIndex(el => el.id === movie.id);
        state.value.viewedList.splice(index, 1);
        state.value.viewedList.unshift(movie);
      }
      state.value.viewedList = viewedList.splice(0, 5);
    },
    addMovieToFavList:(state,action)=>{
      const movie = action.payload;
      const favList = state.value.favList;
      if (favList.filter((el) => el.id === movie.id).length === 0) {
        state.value.favList.unshift(action.payload);
      }
    },
    addMovieToWatchList: (state, action) => {
      const movie = action.payload;
      const watchList = state.value.watchList;
      if(watchList.filter(el => el.id === movie.id).length === 0){
        state.value.watchList.unshift(action.payload);
      }
    },
    // delete
    deleteMovieFromWatchList: (state, action) => {
      state.value.watchList = state.value.watchList.filter(el => el.id !== action.payload.id)
    },
    deleteMovieFromFavList: (state, action) => {
      state.value.favList = state.value.favList.filter(el => el.id !== action.payload.id)
    },
  }
});

export const {
  setMovieList, setViewedList, setWatchList, setFavList, addMovieToViewedList, addMovieToFavList,
  addMovieToWatchList, setIfFavLoaded, setIfWatchLoaded, setIfViewedLoaded, setSelectedMovie,
  deleteMovieFromFavList, deleteMovieFromWatchList
} = movieSlice.actions;
export default movieSlice.reducer;