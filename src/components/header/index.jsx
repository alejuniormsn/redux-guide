import { useState } from "react";
import Cart from "../cart/index";
import { Container, Logo, Buttons } from "./styles";

import { useDispatch, useSelector } from "react-redux";
import { LoginUser, LogoutUser } from "../../redux/user/actions";

export default function Header() {
  const dispatch = useDispatch();

  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector((rootReducer) => rootReducer.UserReducer);

  const { products } = useSelector((rootReducer) => rootReducer.CartReducer);

  const productsCount = products.reduce((acc, curr) => acc + curr.quantity, 0);

  function handleCartClick() {
    setCartIsVisible(true);
  }

  function handleLoginClick() {
    dispatch(LoginUser({ name: "Alexandre", email: "ale@email.com" }));
  }

  function handleLogoutClick() {
    dispatch(LogoutUser());
  }

  return (
    <Container>
      <Logo>Redux Shopping</Logo>
      <Buttons>
        {currentUser ? (
          <div onClick={handleLogoutClick}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}
        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
      </Buttons>

      <Cart
        isVisible={cartIsVisible}
        setIsVisible={setCartIsVisible}
      />
    </Container>
  );
}
