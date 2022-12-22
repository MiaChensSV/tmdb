import React from 'react';
import './MovieListHeading.css';

export default function MovieListHeading(props) {
  return (
    <div className="root-movie-list-heading"><h1>{props.heading}</h1></div>
  )
}
