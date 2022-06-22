import { combineReducers } from "redux";
import movieListReducer from './reducer/movieListReducer'
import watchListReducer from './reducer/watchListReducer'

const combineReducer = combineReducers({movieListReducer,watchListReducer})

export default combineReducer