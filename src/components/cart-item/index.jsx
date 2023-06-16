import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemQuantity,
  RemoveButton,
} from "./styles";

import { useDispatch } from "react-redux";
import {
  DecreaseProductQuantity,
  IncreaseProductQuantity,
  RemoveProductFromCart,
} from "../../redux/cart/actions";

export default function CartItem({ product }) {
  const dispatch = useDispatch();

  function handleRemoveClick() {
    dispatch(RemoveProductFromCart(product.id));
  }

  function handleIncreaseClick() {
    dispatch(IncreaseProductQuantity(product.id));
  }

  function handleDecreaseClick() {
    dispatch(DecreaseProductQuantity(product.id));
  }

  return (
    <CartItemContainer>
      <CartItemImage imageUrl={product.imageUrl} />

      <CartItemInfo>
        <p>{product.name}</p>
        <p>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(product.price)}
        </p>

        <CartItemQuantity>
          <AiOutlineMinus
            size={20}
            onClick={handleDecreaseClick}
          />
          <p>{product.quantity}</p>
          <AiOutlinePlus
            size={20}
            onClick={handleIncreaseClick}
          />
        </CartItemQuantity>
      </CartItemInfo>

      <RemoveButton onClick={handleRemoveClick}>
        <AiOutlineClose size={25} />
      </RemoveButton>
    </CartItemContainer>
  );
}
