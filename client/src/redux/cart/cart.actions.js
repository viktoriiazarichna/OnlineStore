import CartActionTypes from './cart.types';

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItemById = _id => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: _id
  });