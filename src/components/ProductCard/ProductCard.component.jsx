import {
  ProductCardWrapper,
  ProductImage,
  ProductDetailFooter,
} from "./ProductCard.styles";

import Button from "../Button/Button.component";
import { BTN_TYPES } from "../Button/Button.component";
import { useState } from "react";

const ProductCard = ({ item }) => {
  const [cardHovered, setCardHovered] = useState(false);

  const mouseOverHandler = () => {
    setCardHovered(true);
  };

  const mouseOutHandler = () => {
    setCardHovered(false);
  };
  return (
    <ProductCardWrapper
      key={item.id}
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    >
      <ProductImage
        className={cardHovered ? "activate" : ""}
        style={{
          backgroundImage: `url(${item.imageUrl})`,
        }}
      />
      <ProductDetailFooter>
        <span>{item.name}</span>
        <span>{item.price}</span>
      </ProductDetailFooter>
      <Button className={cardHovered ? "show" : ""} type={BTN_TYPES.inverted}>
        ADD TO CART
      </Button>
    </ProductCardWrapper>
  );
};

export default ProductCard;
