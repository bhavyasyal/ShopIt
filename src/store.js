import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import {productReducer,productDetailReducer} from './reducers/productReducers'
import { authReducer,userReducer } from './reducers/userReducer';
//initial state is empty object that contaoin all data we want to put in state before loading the page
const reducer= combineReducers({
    products : productReducer,
    productDetails: productDetailReducer,
    auth:authReducer,
    userReducer:userReducer
})
let initialState = {}

const middlware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))
//spread middleware array,if you want to add more middleware


export default store;