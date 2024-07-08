import {
  CartDropdownWrapper,
  CartProductImg,
  CartItem,
  CartItemsWrapper,
  ProductPrice,
  CartItemDetails,
  CheckoutButton,
} from "./CartDropdown.styles";

import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);

  const navigateToCheckout = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownWrapper>
      <CartItemsWrapper>
        {cartItems.map((cartItem) => {
          return (
            <CartItem>
              <CartProductImg src={cartItem.imageUrl} />
              <CartItemDetails>
                <div className="product-name">{cartItem.name}</div>
                <span className="quantity">{cartItem.quantity}</span>{" "}
                <span>&times;</span>
                <ProductPrice>${cartItem.price}</ProductPrice>
              </CartItemDetails>
            </CartItem>
          );
        })}
      </CartItemsWrapper>
      <CheckoutButton onClick={navigateToCheckout}>
        GO TO CHECKOUT
      </CheckoutButton>
    </CartDropdownWrapper>
  );
};

export default CartDropdown;
