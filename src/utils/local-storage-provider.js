import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFavList, setWatchList, setViewedList, setIfFavLoaded, setIfViewedLoaded, setIfWatchLoaded} from '../store/movie';

const LocalStorageProvider = (props) => {
  
  // setup variable
  const dispatch = useDispatch();
  const favList = useSelector(state => state.movie.value.favList);
  const viewedList = useSelector(state => state.movie.value.viewedList);
  const watchList = useSelector(state => state.movie.value.watchList);
  const ifFavLoaded = useSelector(state => state.movie.value.ifFavLoaded);
  const ifWatchLoaded = useSelector(state => state.movie.value.ifWatchLoaded);
  const ifViewedLoaded = useSelector(state => state.movie.value.ifViewedLoaded);
  const arrayEqual = (arr1, arr2) => {return JSON.stringify(arr1) === JSON.stringify(arr2)}
  
  // useEffect(() => {
  //   localStorage.setItem('localWatchList', JSON.stringify([]));
  //   localStorage.setItem('localFavList', JSON.stringify([]));
  //   localStorage.setItem('localWatchList', JSON.stringify([]));
  // }, []);

  // get data from local storage
  useEffect(() => {
    const localFavList = JSON.parse(localStorage.getItem('localFavList'));
    if (localFavList) {
      dispatch(setFavList(localFavList));
      dispatch(setIfFavLoaded(true));
    }
    const localWatchList = JSON.parse(localStorage.getItem('localWatchList'));
    if (localWatchList) {
      dispatch(setWatchList(localWatchList));
      dispatch(setIfWatchLoaded(true));
    }
    const localViewedList = JSON.parse(localStorage.getItem('localViewedList'));
    if (localViewedList) {
      dispatch(setViewedList(localViewedList));
      dispatch(setIfViewedLoaded);
    }
  }, [dispatch]);

  // Save data to local storage
  useEffect(() => {
    const localFavList = JSON.parse(localStorage.getItem('localFavList'));
    if(ifFavLoaded && !arrayEqual(localFavList, favList)){
      localStorage.setItem('localFavList', JSON.stringify(favList));
    }
    console.log('store', favList);
    const alocalFavList = JSON.parse(localStorage.getItem('localFavList'));
    console.log('local', alocalFavList);
  }, [favList, ifFavLoaded]);
  useEffect(() => {
    const localWatchList = JSON.parse(localStorage.getItem('localWatchList'));
    if(ifWatchLoaded && !arrayEqual(localWatchList, watchList)){
      localStorage.setItem('localWatchList', JSON.stringify(watchList));
    }
  }, [watchList, ifWatchLoaded]);
  useEffect(() => {
    const localViewedList = JSON.parse(localStorage.getItem('localViewedList'));
    if(ifViewedLoaded && !arrayEqual(localViewedList, viewedList)){
      localStorage.setItem('localViewedList', JSON.stringify(viewedList));
    }
  }, [viewedList, ifViewedLoaded]);

  return (
    <>
      { props.children }
    </>
  );
}

export default LocalStorageProvider;