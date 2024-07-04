import { Outlet } from "react-router-dom";
import CartDropdown from "../CartDropdown/CartDropdown.component";
import {
  NavigationContainer,
  LinksWrapper,
  LinkList,
  CartIconContainer,
  LogoWrapper,
  ContentWrapper,
  CartItemCount,
} from "./Navigation.styles";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { ReactComponent as CartIcon } from "../../assets/shopping-bag.svg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../store/user/user.selector";
import { actionSigningOut } from "../../store/user/user.action";
const Navigation = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAuthClick = () => {
    if (!user) navigate("/auth");
    else dispatch(actionSigningOut());

    console.log(user);
  };

  return (
    <>
      <NavigationContainer>
        <LogoWrapper to="/">
          <Logo />
        </LogoWrapper>
        <LinksWrapper>
          <LinkList>
            <Link to="/shop">SHOP</Link>
          </LinkList>
          <LinkList onClick={handleAuthClick}>
            <Link>{user ? `SIGN OUT` : `SIGN IN`}</Link>
          </LinkList>
          <CartIconContainer>
            <CartIcon />
            <CartItemCount>4</CartItemCount>
            <CartDropdown />
          </CartIconContainer>
        </LinksWrapper>
      </NavigationContainer>
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </>
  );
};

export default Navigation;
