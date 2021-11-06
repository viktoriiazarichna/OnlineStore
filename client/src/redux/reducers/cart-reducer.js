import {
    ADD_PRODUCT_TO_CART,
    DELETE_PRODUCT_FROM_CART
} from '../action-types';


const initialState = {
    productsInCart: [],
  }

export const reducer = (state = initialState, action) => {

    switch (action.type) {
      case ADD_PRODUCT_TO_CART: {
  
        return {
          ...state,
          
        }
      }
      
      case DELETE_PRODUCT_FROM_CART: {
  
        return {
          ...state,
          
        }
      }
  
  
      default:
        console.log('action', action.type, 'does not exist');
        return state;
  
    }
  }

  export default reducer