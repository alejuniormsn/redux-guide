import { BsCartPlus } from "react-icons/bs";
import CustomButton from "../custom-button/index";
import { ProductContainer, ProductImage, ProductInfo } from "./styles";
import { useDispatch } from "react-redux";
import { AddProductToCart } from "../../redux/cart/actions";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();

  function HandleProductClick() {
    dispatch(AddProductToCart(product));
  }

  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl}>
        <CustomButton
          startIcon={<BsCartPlus />}
          onClick={HandleProductClick}
        >
          Adicionar ao carrinho
        </CustomButton>
      </ProductImage>

      <ProductInfo>
        <p>{product.name}</p>
        <p>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(product.price)}
        </p>
      </ProductInfo>
    </ProductContainer>
  );
}
