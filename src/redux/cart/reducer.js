import cartActionType from "./action-types";

const initialSate = {
  products: []
}

export default function CartReducer(state = initialSate, action) {
  switch (action.type) {
    case cartActionType.ADD_PRODUCT:
      const productIsAlReadyInCart = state.products.some((product) => product.id === action.payload.id);

      if (productIsAlReadyInCart) {
        return {
          ...state,
          products: state.products.map(
            (product) => product.id === action.payload.id ?
              { ...product, quantity: product.quantity + 1 } : product
          )
        };
      } else {
        return {
          ...state,
          products: [...state.products, { ...action.payload, quantity: 1 }]
        };
      }

    case cartActionType.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload)
      }

    case cartActionType.INCREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) => product.id === action.payload ?
          { ...product, quantity: product.quantity + 1 } : product)
      }

    case cartActionType.DECREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) => product.id === action.payload ?
          { ...product, quantity: product.quantity - 1 } : product).filter(
            (product) => product.quantity > 0
          )
      }

    default:
      return state;
  }
}