import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import MovieList from '../../components/MovieList';
import Layout from '../../layout/Layout';

export default function WatchList() {

  const watchList = useSelector(state => state.movie.value.watchList);

  return (
    <>
      <Layout />
      <div>WatchList</div>
      <Link to='/' className='btn btn-primary'>
        Back home
      </Link>
      <MovieList movies={watchList} />
    </>
  )
}
