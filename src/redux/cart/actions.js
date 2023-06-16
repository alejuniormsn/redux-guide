import cartActionType from "./action-types";

export function AddProductToCart(payload) {
  return {
    type: cartActionType.ADD_PRODUCT,
    payload
  }
}

export function RemoveProductFromCart(payload) {
  return {
    type: cartActionType.REMOVE_PRODUCT,
    payload
  }
}

export function IncreaseProductQuantity(payload) {
  return {
    type: cartActionType.INCREASE_PRODUCT_QUANTITY,
    payload
  }
}

export function DecreaseProductQuantity(payload) {
  return {
    type: cartActionType.DECREASE_PRODUCT_QUANTITY,
    payload
  }
}