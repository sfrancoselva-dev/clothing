import {
  CartDropdownWrapper,
  CartProductImg,
  CartItem,
  CartItemsWrapper,
  ProductPrice,
  CartItemDetails,
  CheckoutButton,
} from "./CartDropdown.styles";

import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const navigate = useNavigate();

  const navigateToCheckout = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownWrapper>
      <CartItemsWrapper>
        <CartItem>
          <CartProductImg src="https://i.ibb.co/ZYW3VTp/brown-brim.png" />
          <CartItemDetails>
            <div className="product-name">Product 1</div>
            <span className="quantity">1</span> <span>&times;</span>
            <ProductPrice>$30</ProductPrice>
          </CartItemDetails>
        </CartItem>

        <CartItem>
          <CartProductImg src="https://i.ibb.co/ZYW3VTp/brown-brim.png" />
          <CartItemDetails>
            <div className="product-name">Product 2</div>
            <span className="quantity">1</span> <span>&times;</span>
            <ProductPrice>$30</ProductPrice>
          </CartItemDetails>
        </CartItem>

        <CartItem>
          <CartProductImg src="https://i.ibb.co/ZYW3VTp/brown-brim.png" />
          <CartItemDetails>
            <div className="product-name">Product 2</div>
            <span className="quantity">1</span> <span>&times;</span>
            <ProductPrice>$30</ProductPrice>
          </CartItemDetails>
        </CartItem>
      </CartItemsWrapper>
      <CheckoutButton onClick={navigateToCheckout}>
        GO TO CHECKOUT
      </CheckoutButton>
    </CartDropdownWrapper>
  );
};

export default CartDropdown;
