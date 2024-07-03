import SignIn from "../../components/SignIn/SignIn.component";
import SignUp from "../../components/SignUp/SignUp.component";
import Spinner from "../../components/Spinner/Spinner.component";

import { AuthWrapper } from "./Auth.styles";
const Auth = () => (
  <>
    <AuthWrapper>
      <SignIn />
      <SignUp />
    </AuthWrapper>
  </>
);

export default Auth;
