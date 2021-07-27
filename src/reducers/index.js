import { combineReducers } from 'redux'
import todos from './todos'
import visible from './visible'

export default combineReducers({
    todos,
    visible
})