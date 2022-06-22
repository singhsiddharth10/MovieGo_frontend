import "../moviedetail/moviedetailstyle.css";
import kgfBg from "../../assets/kgfBg2.jpg";
import Navbar from "../navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchWatchlist } from "../store/action/fetchWatchlistAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solid } from "@fortawesome/free-solid-svg-icons";
import { faStar as regular } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import ChatModel from "../chatmodel/ChatModel";

export default function MovieDetails() {
  const location = useLocation();

  const {
    id,
    name,
    rating,
    duration,
    releaseYear,
    ageLimit,
    des,
    director,
    staring,
    genres,
    subtiles,
    audioLanguage,
    imgsrc,
  } = location.state;

  const dispatch = useDispatch();

  const movieData = useSelector((state) => state.watchListReducer.watchlist);

  console.log("movieData", movieData);
  var present = false;
  movieData.map((index) => {
    if (index.id === id) {
      present = true;
    }
  });
  const [color, setColor] = useState(present);
  const [showChatScreen, setShowChatScreen] = useState(false);

  const addMovie = () => {
    setColor(!color);
    var tempData = [
      {
        id: id,
        name: name,
        rating: rating,
        releaseYear: releaseYear,
        ageLimit: ageLimit,
        des: des,
        director: director,
        staring: staring,
        genres: genres,
        subtiles: subtiles,
        audioLanguage: audioLanguage,
        imgsrc: imgsrc,
        watchlist: true,
      },
    ];
    dispatch(fetchWatchlist([...movieData, ...tempData]));
  };

  const removieMovie = (id) => {
    setColor(!color);
    var tempData = [];
    movieData.map((index) => {
      var movieId = index.id;
      var tempData1 = [];
      tempData1.push(index);

      console.log("movieId", movieId, "id", id);
      if (movieId !== id) {
        tempData = [...tempData, ...tempData1];
      }
      tempData1.pop();
    });
    dispatch(fetchWatchlist(tempData));
  };

  useEffect(()=>{
    window.onclick = function(e){
      if(e.target.id === "chatParentDiv"){
        setShowChatScreen(false)
      }
    }
  },[])

  return (
    <>
      <Navbar></Navbar>
      <div className="mainContainer">
        <div className="headerPanel">
          <div className="movie_watch">
            <div className="movietitle">{name} </div>
            <div
              style={{ paddingTop: "0.3rem" }}
              onClick={color === false ? addMovie : () => removieMovie(id)}
            >
              {color === false ? (
                <FontAwesomeIcon icon={regular} color="#ffd700" />
              ) : (
                <FontAwesomeIcon icon={solid} color="#ffd700" />
              )}
            </div>
          </div>

          <div className="detailContainer">
            <div className="detail">
              <div className="squareBox">IMDb </div>
              <div className="normal">{rating} </div>
              <div className="normal">{duration} </div>
              <div className="normal"> {releaseYear}</div>
              <div className="squareBox">{ageLimit} </div>
            </div>
            <div className="des">{des}</div>

            <div className="btnDiv">
              <button className="btn" style={{ marginRight: "10%" }}>
                Watch Trailer
              </button>
              <button
                className="btn"
                style={{ marginRight: "10%" }}
                onClick={() => setShowChatScreen((prev) => !prev)}
              >
                Start Chat
              </button>
            </div>
            <div className="castDetail">
              <div className="crewDetail">
                <div className="rightSpace">Director</div>
                <div>{director}</div>
              </div>
              <div className="crewDetail">
                <div className="rightSpace">Staring</div>
                <div>{staring}</div>
              </div>
              <div className="crewDetail">
                <div className="rightSpace">Genres</div>
                <div>{genres}</div>
              </div>
              <div className="crewDetail">
                <div className="rightSpace">Subtiles</div>
                <div>{subtiles}</div>
              </div>
              <div className="crewDetail">
                <div className="rightSpace">Audio Language</div>
                <div>{audioLanguage}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="image">
          <img src={kgfBg} id="bgImg" />
        </div>
        <div></div>
        {showChatScreen && (
          <div
            style={{
              height: "100vh",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position : "absolute",
              top : 0,
              left : 0,
              zIndex : 100
            }}
            id = "chatParentDiv"
          >
            <div className="chatDiv" id = "chatChildDiv" >
              <ChatModel></ChatModel>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
