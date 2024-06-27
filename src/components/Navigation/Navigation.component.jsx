import { Outlet } from "react-router-dom";
import CartDropdown from "../CartDropdown/CartDropdown.component";
import {
  NavigationContainer,
  LinksWrapper,
  LinkList,
  CartIconContainer,
  LogoWrapper,
  ContentWrapper,
} from "./Navigation.styles";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { ReactComponent as CartIcon } from "../../assets/shopping-bag.svg";
import { Link } from "react-router-dom";
const Navigation = () => (
  <>
    <NavigationContainer>
      <LogoWrapper to="/">
        <Logo />
      </LogoWrapper>
      <LinksWrapper>
        <LinkList>
          <Link to="/shop">SHOP</Link>
        </LinkList>
        <LinkList>
          <Link to="/auth">SIGN IN</Link>
        </LinkList>
        <CartIconContainer>
          <CartIcon />
          <CartDropdown />
        </CartIconContainer>
      </LinksWrapper>
    </NavigationContainer>
    <ContentWrapper>
      <Outlet />
    </ContentWrapper>
  </>
);

export default Navigation;
