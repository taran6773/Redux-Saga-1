import changeNumber from "./upDown";
import otherNumber from './multdiv'

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeNumber,
    otherNumber
})

export default rootReducer;