import {
  ProductCardWrapper,
  ProductImage,
  ProductDetailFooter,
} from "./ProductCard.styles";

import Button from "../Button/Button.component";
import { BTN_TYPES } from "../Button/Button.component";

const ProductCard = ({ item }) => (
  <ProductCardWrapper key={item.id}>
    <ProductImage
      style={{
        backgroundImage: `url(${item.imageUrl})`,
      }}
    />
    <ProductDetailFooter>
      <span>{item.name}</span>
      <span>{item.price}</span>
    </ProductDetailFooter>
    <Button type={BTN_TYPES.inverted}>ADD TO CART</Button>
  </ProductCardWrapper>
);

export default ProductCard;
