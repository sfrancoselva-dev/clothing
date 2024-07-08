import {
  ProductCardWrapper,
  ProductImage,
  ProductDetailFooter,
} from "./ProductCard.styles";

import Button from "../Button/Button.component";
import { BTN_TYPES } from "../Button/Button.component";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { actionaddToCartStart } from "../../store/cart/cart.action";

const ProductCard = ({ item, belongsTo }) => {
  const dispatch = useDispatch();
  const [cardHovered, setCardHovered] = useState(false);

  const mouseOverHandler = () => {
    setCardHovered(true);
  };

  const mouseOutHandler = () => {
    setCardHovered(false);
  };

  const addItemToCart = (e) => {
    dispatch(actionaddToCartStart(e.target.id, e.target.dataset.belongsTo));
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
      <Button
        className={cardHovered ? "show" : ""}
        type={BTN_TYPES.inverted}
        onClick={addItemToCart}
        id={item.id}
        data-belongs-to={belongsTo}
      >
        ADD TO CART
      </Button>
    </ProductCardWrapper>
  );
};

export default ProductCard;
