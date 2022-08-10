import {createStore,combineReducers} from 'redux'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import taskReducer from '../reducers/taskReducer'

// if we have multiple middleware
// const middleWare = [thunk]
const configureStore = ()=>{
    const store = createStore(combineReducers({
        tasks : taskReducer
        
    }),applyMiddleware(thunk))
    return store
}

export default configureStore