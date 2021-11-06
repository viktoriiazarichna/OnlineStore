import {
    ADD_PRODUCT_TO_CART,
    DELETE_PRODUCT_FROM_CART
} from '../action-types';


const addProductToCart = (id) => ({ type: ADD_PRODUCT_TO_CART, payload: id });
const deleteProductFromCart = (id) => ({ type: DELETE_PRODUCT_FROM_CART, payload: id });

const toggleItemInCart = (id) => (dispatch, getState) => {
    const {cart: {productsInCart}} = getState();

    const alreadyExist = !!productsInCart.find(el => el === id);

    dispatch( alreadyExist ? deleteProductFromCart(id) : addProductToCart(id))

}

export {
    toggleItemInCart,
    addProductToCart,
    deleteProductFromCart
}