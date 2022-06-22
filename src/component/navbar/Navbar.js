import '../navbar/navbarstyle.css'
import {  useNavigate} from 'react-router-dom';

export default function Navbar() {
  const navigate =  useNavigate ();

  const goToHome = () => {
    navigate("/")
  }
  const goToChat = () => {
    navigate("/MovieDetails")
  }
  const goToWatchlist = ()=> {
    navigate("/WatchlistScreen")
  }
  return (
    
       <div className='nav1'>
                <div className='moviego1' onClick={goToHome}> MovieGo</div>
                <div className='navItem1' onClick={goToHome}> Home</div>
                <div className='navItem1' onClick={goToChat}> Chat Room</div>
                <div className='navItem1' onClick={goToWatchlist}> Watchlist</div>
        </div>
    
  )
}
