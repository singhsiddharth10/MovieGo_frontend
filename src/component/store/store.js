import combineReducer from './combineReducer'
import {createStore} from 'redux'

const store = createStore(combineReducer)

export default store