import Navbar from "../navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import "./watchliststyle.css";
import MovieCard from '../moviecard/MovieCard'

export default function WatchlistScreen() {

  const whatchlistData = useSelector(
    (state) => state.watchListReducer.watchlist
  );

  return (
    <>
      <Navbar></Navbar>
      <div className="topContainer">
        <div className="title">My List</div>

        {whatchlistData &&
          whatchlistData.map((index) => {
            return <MovieCard key={index.id} data={index}></MovieCard>;
          })}
      </div>
    </>
  );
}
