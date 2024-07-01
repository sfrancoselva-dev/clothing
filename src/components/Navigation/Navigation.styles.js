import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
`;

export const LogoWrapper = styled(Link)`
  display: block;
  margin-top: 10px;
`;

export const LinksWrapper = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  padding: 0;
  gap: 1.5rem;

  @media screen and (max-width: 480px) {
    justify-content: space-around;
  }
`;

export const LinkList = styled.li`
  padding: 5px 10px;
`;

export const CartIconContainer = styled.div`
  width: 24px;
  cursor: pointer;
  position: relative;
`;

export const ContentWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 25px 0;
`;

export const CartItemCount = styled.div`
  font-size: 11px;
  text-align: center;
  position: absolute;
  top: 8px;
  width: 24px;
  font-weight: 700;
`;
