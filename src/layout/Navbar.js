import React from "react";
import { Link, } from "react-router-dom";
import "./style.css"

export default function Navbar() {

  //event listener
  const cleanList = () => {
    localStorage.setItem('localFavList', JSON.stringify([]));
    localStorage.setItem('localWatchList', JSON.stringify([]));
    localStorage.setItem('localViewedList', JSON.stringify([]));
  }

  return (
    <nav >
      <div className="nav-center">
        <Link className="topbar-link" to="/">TMDB Home</Link>
        <Link className="topbar-link" to="/watch-list">WatchList</Link>
        <div className="clean-list-btn" onClick={() => cleanList()} >Clear List</div>
      </div>
    </nav>
  );
}
