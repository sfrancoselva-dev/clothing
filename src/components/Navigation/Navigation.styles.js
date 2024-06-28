import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LogoWrapper = styled(Link)`
  display: block;
  margin-top: 10px;
`;

export const LinksWrapper = styled.ul`
  display: flex;
  list-style: none;
  width: 210px;
  justify-content: space-between;
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
