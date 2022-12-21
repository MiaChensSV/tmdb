import React from "react";
import { Link, Routes, Route } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar ">
      <div className="nav-center d-flex justify-content-between">
        <Link to="/">TMDB Homepage</Link>
        <Link to="/watchList">WatchList</Link>
        
      </div>
    </nav>
  );
}
