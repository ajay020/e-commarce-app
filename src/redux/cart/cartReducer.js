import { ADD_TO_CART, DELETE_FROM_CART } from './cartActionTypes';

const initialState = {
    shoppingItems:[]
}

const itemExists = (state, newItem) => state.shoppingItems.some(item => item.id === newItem.id);

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: 
            if(itemExists(state, action.payload)){
                return state;    
            }else{
                return{
                    ...state,
                    shoppingItems: [...state.shoppingItems, action.payload]
                }
            }
        case DELETE_FROM_CART:
            return {
                ...state, 
                shoppingItems: state.shoppingItems.filter(item => item.id !== action.payload)
            }
        default: return state;
    }
}




