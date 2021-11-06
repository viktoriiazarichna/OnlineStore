import { combineReducers } from 'redux';
import cartReducer from './cart-reducer';

export const reducer = combineReducers({
  cart: cartReducer
})


