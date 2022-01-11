
import { FETCH_PRODUCTS_LOADING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from './productActionType';
import axios  from 'axios';

export const productLoading =() =>{
    return {
        type: FETCH_PRODUCTS_LOADING
    }
}

export const productSuccess = (products) =>{
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const productError = (error) =>{
    return {
        type: FETCH_PRODUCTS_ERROR,
        payload: error 
    }
}

export const fetchProducts = () =>{
    return async function (dispatch){
       try {
            dispatch(productLoading());
            const response =  await axios.get("https://fakestoreapi.com/products");
            dispatch(productSuccess(response.data));    
       } catch (error) {
           dispatch(productError(error.message));
       }
    }
}