import styled from "styled-components";
import Button from "../Button/Button.component";

export const CartDropdownWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 50px;
  border: 1px solid #000;
  display: flex;
  flex-direction: row;
  height: 500px;
  width: 350px;
  padding: 20px 10px;
  background: #fff;
  z-index: 9999;
  display: none;

  @media (max-width: 400px) {
    width: 280px;
  }
`;

export const CartItemsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 370px;
  overflow: auto;
`;

export const CartItem = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #e1e1e1;
  padding-bottom: 15px;
`;

export const CartProductImg = styled.img`
  width: 120px;
  height: 120px;
`;

export const CartItemDetails = styled.div`
  font-weight: 700;
  width: calc(100% - 120px);
  padding-left: 15px;
  padding-top: 26px;
  line-height: 30px;
  font-style: italic;
`;

export const ProductPrice = styled.span`
  padding-left: 5px;
`;

export const CheckoutButton = styled(Button)`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;
