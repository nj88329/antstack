import { ActionTypes } from "../constants/action-types"

function addproduct(product){
  return{
      type: ActionTypes.ADD_PRODUCT,
      product
  }
}

export function removeProduct(product){
    return{
        type:ActionTypes.REMOVE_PRODUCT,
        product
    }
}

export default addproduct;

