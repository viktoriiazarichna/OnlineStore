import {
    ADD_TO_CART,
    DELETE
} from '../action-types';

const initialState = {
    counter: 0
  }

export const reducer = (state = initialState, action) => {

    switch (action.type) {
      case ADD_TO_CART: {
  
        return {
          ...state,
          counter: state.counter + 1
        }
      }
      
      case DELETE: {
  
        return {
          ...state,
          counter: state.counter - 1
        }
      }
  
  
      default:
        console.log('action', action.type, 'does not exist');
        return state;
  
    }
  }