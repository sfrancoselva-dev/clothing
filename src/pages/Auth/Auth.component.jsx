import SignIn from "../../components/SignIn/SignIn.component";
import SignUp from "../../components/SignUp/SignUp.component";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectUser } from "../../store/user/user.selector";

import { AuthWrapper } from "./Auth.styles";
import { useEffect } from "react";
const Auth = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    user && navigate("/shop");
  }, [user]);

  return (
    <AuthWrapper>
      <SignIn />
      <SignUp />
    </AuthWrapper>
  );
};

export default Auth;
