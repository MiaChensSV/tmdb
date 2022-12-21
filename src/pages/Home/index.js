import "bootstrap/dist/css/bootstrap.min.css";
// Store
import { useSelector } from "react-redux";
import Layout from "../../layout/Layout";
import Search from "../../components/Search";
import MovieListHeading from "../../components/MovieListHeading";
import MovieList from "../../components/MovieList";
import "./Home.css";

const Home = () => {

  // set variables
  const movieList = useSelector((state) => state.movie.value.movieList);
  const favList = useSelector(state => state.movie.value.favList);
  const viewedList = useSelector(state => state.movie.value.viewedList);

  return (
    <>
      <Layout>
        <div className="container-fluid movie-app">
          <div>
            <Search />
          </div>
          <div>
            <MovieListHeading heading="Search Results: " />
          </div>
          <div className="row">
            <MovieList
              listType="MovieList"
              movies={movieList}
            />
          </div>
          <div>
            <MovieListHeading heading="Favourite Movies: " />
          </div>
          <div className="row">
            <MovieList
              listType="FavList"
              movies={favList}
            />
          </div>
          <div>
            <MovieListHeading heading="Recently Viewed Movies: " />
          </div>
          <MovieList
            listType="ViewedList"
            movies={viewedList}
          />
        </div>
      </Layout>
    </>
  );
};

export default Home;
