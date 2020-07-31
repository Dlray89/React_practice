import Reducer1 from './reducder1'
import UserReducer from './userRuducer'
import { combineReducers } from "redux"



const rootReducer = combineReducers({
    Reducer1: Reducer1,
    user_reducer: UserReducer
})

export default rootReducer

