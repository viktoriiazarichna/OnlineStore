import {
    ADD_TO_CART,
    DELETE
} from '../action-types'

const addAction = () => ({type: ADD_TO_CART})
const deleteAction = () => ({type: DELETE})

export {
    addAction,
    deleteAction
}