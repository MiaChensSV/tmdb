import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFavList, setWatchList, setViewedList } from '../store/movie';

const LocalStorageProvider = (props) => {
  
  // setup variable
  const dispatch = useDispatch();
  const favList = useSelector(state => state.movie.value.favList);
  const viewedList = useSelector(state => state.movie.value.viewedList);
  const watchList = useSelector(state => state.movie.value.watchList);
  const arrayEqual = (arr1, arr2) => {return JSON.stringify(arr1) === JSON.stringify(arr2)}
  
  // get data from local storage
  // useEffect(() => {
  //   const localFavList = JSON.parse(localStorage.getItem('localFavList'));
  //   if (localFavList) {
  //     dispatch(setFavList(localFavList));
  //   }
  //   const localWatchList = JSON.parse(localStorage.getItem('localWatchList'));
  //   if (localWatchList) {
  //     dispatch(setWatchList(localWatchList));
  //   }
  //   const localViewedList = JSON.parse(localStorage.getItem('localViewedList'));
  //   if (localViewedList) {
  //     dispatch(setViewedList(localViewedList));
  //   }
  // }, []);

  // // Save data to local storage
  // useEffect(() => {
  //   const localFavList = JSON.parse(localStorage.getItem('localFavList'));
  //   if(!arrayEqual(localFavList, favList)){
  //     localStorage.setItem('localFavList', JSON.stringify(favList));
  //   }
  // }, [favList]);
  // useEffect(() => {
  //   const localWatchList = JSON.parse(localStorage.getItem('localWatchList'));
  //   if(!arrayEqual(localWatchList, watchList)){
  //     localStorage.setItem('localFavList', JSON.stringify(watchList));
  //   }
  // }, [watchList]);
  // useEffect(() => {
  //   const localViewedList = JSON.parse(localStorage.getItem('localViewedList'));
  //   if(!arrayEqual(localViewedList, viewedList)){
  //     localStorage.setItem('localFavList', JSON.stringify(viewedList));
  //   }
  // }, [favList]);

  return (
    <>
      { props.children }
    </>
  );
}

export default LocalStorageProvider;