import { combineReducers } from "redux";

import bugsReducer from './bugs'
import projectReducer from "./project";
import memberReducer from './member'

export default combineReducers({
    bugs : bugsReducer, 
    projects : projectReducer, 
    member : memberReducer
})
