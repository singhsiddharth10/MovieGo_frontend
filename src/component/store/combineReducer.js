import { combineReducers } from "redux";
import movieListReducer from './reducer/movieListReducer'
import watchListReducer from './reducer/watchListReducer'
import chatmessageReducer from './reducer/chatmessageReducer'


const combineReducer = combineReducers({movieListReducer,watchListReducer,chatmessageReducer})

export default combineReducer