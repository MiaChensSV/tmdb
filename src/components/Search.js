import React from "react";

export default function Search(props) {
  function handelSubmit(e) {
    e.preventDefalut();
  }
  return (
    <form onSubmit={handelSubmit}>
      <input placeholder="type to search" value={props.value} onChange={(event)=>props.setSerchmovie(event.target.value)}></input>
      <button>search</button>
    </form>
  );
}
