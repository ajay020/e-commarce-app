import { createStore, applyMiddleware, combineReducers } from "redux";
import { productReducer } from './product/productReducer';
import { cartReducer } from "./cart/cartReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer
})

const store = createStore(  rootReducer, composeWithDevTools(
    applyMiddleware( thunk) ));

export default store;