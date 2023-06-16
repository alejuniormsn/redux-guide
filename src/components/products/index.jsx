import products from "../../data/products";
import ProductItem from "../product-item/index";
import { Container } from "./styles";

export default function Products() {
  return (
    <Container>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
        />
      ))}
    </Container>
  );
}
