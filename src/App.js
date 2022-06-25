import './App.css';
import MainScreen from './component/mainscreen/Mainsreen'
import MovieDetails from './component/moviedetail/Moviedetail'
import WatchlistScreen from './component/whatchlistscreen/WatchlistScreen'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthScreen from './component/authscreen/AuthScreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <AuthScreen></AuthScreen>}/>
          <Route path="/MainScreen" element={ <MainScreen></MainScreen>}/>
          <Route path="/MovieDetails" element={<MovieDetails></MovieDetails>} />
          <Route path="/WatchlistScreen" element={<WatchlistScreen></WatchlistScreen>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
