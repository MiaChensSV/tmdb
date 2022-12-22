import React from "react";
import { Link, } from "react-router-dom";
import "./style.css"

export default function Navbar() {
  return (
    <nav >
      <div className="nav-center">
        <Link className="topbar-link" to="/">TMDB Home</Link>
        <Link className="topbar-link" to="/watch-list">WatchList</Link>
      </div>
    </nav>
  );
}
