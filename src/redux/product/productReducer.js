
import { FETCH_PRODUCTS_LOADING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from './productActionType';
const initialState = {
    loading: false,
    products: [],
    error:""
}

export const productReducer = (state=initialState, action)=>{
    switch(action.type){
        case FETCH_PRODUCTS_LOADING: return {
            ...state,
            loading: true
        }
        case FETCH_PRODUCTS_SUCCESS: return{
            ...state, 
            loading:false,
            products: action.payload
        }
        case FETCH_PRODUCTS_ERROR : return{
            ...state, 
            loading:false,
            error: action.payload
        }
        default: return state;
    }
}

