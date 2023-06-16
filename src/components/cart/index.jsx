import { useSelector } from "react-redux";
import CartItem from "../cart-item";
import {
  CartContainer,
  CartEscapeArea,
  CartContent,
  CartTitle,
  CartTotal,
} from "./styles";

export default function Cart({ isVisible, setIsVisible }) {
  const { products } = useSelector((rootReducer) => rootReducer.CartReducer);

  const totalPriceProducts = products.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  const handleEscapeAreaClick = () => setIsVisible(false);

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={handleEscapeAreaClick} />
      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>
        {products.map((product) => (
          <CartItem
            product={product}
            key={product.id}
          />
        ))}
        <CartTotal>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(totalPriceProducts)}
        </CartTotal>
      </CartContent>
    </CartContainer>
  );
}
