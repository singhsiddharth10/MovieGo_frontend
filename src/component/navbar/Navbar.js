import "../navbar/navbarstyle.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/MainScreen");
  };

  const goToWatchlist = () => {
    navigate("/WatchlistScreen");
  };

  const handleLogout = () => {
    navigate("/")
  }
  
  return (
    <div className="nav1">
      <div className="moviego1" onClick={goToHome}>
        MovieGo
      </div>
      <div className="navItem1" onClick={goToHome}>
        Home
      </div>
      <div className="navbaritempos">
        <div className="navItem1" onClick={goToWatchlist}>
          Watchlist
        </div>
        <div
          className="navItem1"
          onClick={handleLogout}
        >
          Logout
        </div>
      </div>
    </div>
  );
}
