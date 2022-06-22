import './App.css';
import MainScreen from './component/mainscreen/Mainsreen'
import MovieDetails from './component/moviedetail/Moviedetail'
import ChatScreen from './component/chatscreen/ChatScreen'
import WatchlistScreen from './component/whatchlistscreen/WatchlistScreen'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <MainScreen></MainScreen>}/>
          <Route path="/MovieDetails" element={<MovieDetails></MovieDetails>} />
          <Route path="/ChatScreen" element={<ChatScreen></ChatScreen>} />
          <Route path="/WatchlistScreen" element={<WatchlistScreen></WatchlistScreen>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
