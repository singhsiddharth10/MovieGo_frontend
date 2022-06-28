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
  console.log("location.state",location.state)

  const {
    filmId,
    title,
    rating,
    duration,
    releaseYear,
    ageLimtit,
    description,
    director,
    staring,
    genres,
    subtitle,
    audioLanguage,
    imgSrc,
  } = location.state.data;

 

  const dispatch = useDispatch();

  const movieData = useSelector((state) => state.watchListReducer.watchlist);

  var present = false;
  movieData.map((index) => {
    if (index.filmId === filmId) {
      present = true;
    }
  });
  const [color, setColor] = useState(present);
  const [showChatScreen, setShowChatScreen] = useState(false);

  const addMovie = () => {
    setColor(!color);
    var tempData = [
      {
        filmId: filmId,
        title: title,
        rating: rating,
        releaseYear: releaseYear,
        ageLimtit: ageLimtit,
        description: description,
        director: director,
        staring: staring,
        genres: genres,
        subtitle: subtitle,
        audioLanguage: audioLanguage,
        imgSrc: imgSrc,
        watchlist: true,
      },
    ];
    dispatch(fetchWatchlist([...movieData, ...tempData]));
  };

  const removieMovie = (id) => {
    setColor(!color);
    var tempData = [];
    movieData.map((index) => {
      var movieId = index.filmId;
      var tempData1 = [];
      tempData1.push(index);

      console.log("movieId", movieId, "id", filmId);
      if (movieId !== filmId) {
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
            <div className="movietitle">{title} </div>
            <div
              style={{ paddingTop: "0.3rem" }}
              onClick={color === false ? addMovie : () => removieMovie(filmId)}
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
              <div className="normal" style ={{marginLeft : "0.5rem"}}>{rating}  </div>
              <div className="normal">{duration} </div>
              <div className="normal" style={{marginRight : "0.5rem"}}> {releaseYear}</div>
              <div className="squareBox">{ageLimtit} </div>
            </div>
            <div className="des">{description}</div>

            <div className="btnDiv">
              <button className="btn" style={{ marginRight: "10%" }}>
                <p style ={{fontSize : "13px"}}>Watch Trailer</p>
              </button>
              <button
                className="btn" 
                style={{ marginRight: "10%" }}
                onClick={() => setShowChatScreen((prev) => !prev)}
              >
                <p style ={{fontSize : "13px"}}>Start Chat</p>
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
                <div>{subtitle}</div>
              </div>
              <div className="crewDetail">
                <div className="rightSpace">Audio Language</div>
                <div>{audioLanguage}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="image">
          <img src={imgSrc} id="bgImg" />
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
              <ChatModel showChatScreen = {showChatScreen} setShowChatScreen={setShowChatScreen} filmId = {filmId} userName = {location.state.userName}></ChatModel>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
