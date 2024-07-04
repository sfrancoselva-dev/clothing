import Button from "../Button/Button.component";
import { BTN_TYPES } from "../Button/Button.component";
import FormHeader from "../FormHeader/FormHeader.component";
import FormContent from "../FormContent/FormContent.component";
import FormFooter from "../FormFooter/FormFooter.component";

import { SignInWrapper } from "./SignIn.styles";
import FormField from "../FormField/FormField.component";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actionSigningIn,
  actionGoogleSigningIn,
} from "../../store/user/user.action";
import { selectError } from "../../store/user/user.selector";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const signInHandler = (e) => {
    e.preventDefault();
    dispatch(actionSigningIn(email, password));
  };

  const googleSigninHandler = (e) => {
    e.preventDefault();
    dispatch(actionGoogleSigningIn());
  };

  useEffect(() => {
    if (error) {
      switch (error.code) {
        case "auth/invalid-credential":
          alert("Invalid credentials");
          break;

        default:
          return;
      }
    }
  }, [error]);

  return (
    <SignInWrapper>
      <FormHeader>
        <h2>I already have an account</h2>
        <p>Sign in with your email and password</p>
      </FormHeader>
      <FormContent>
        <form onSubmit={signInHandler}>
          <FormField
            formFieldProps={{
              id: "email",
              name: "email",
              type: "email",
              required: true,
              labelText: "Email",
              value: email,
              setValue: setEmail,
            }}
          />

          <FormField
            formFieldProps={{
              id: "password",
              name: "password",
              type: "password",
              required: true,
              labelText: "Password",
              value: password,
              setValue: setPassword,
            }}
          />
          <FormFooter>
            <Button>SIGN IN</Button>
            <Button type={BTN_TYPES.googleSignIn} onClick={googleSigninHandler}>
              SIGN IN WITH GOOGLE
            </Button>
          </FormFooter>
        </form>
      </FormContent>
    </SignInWrapper>
  );
};

export default SignIn;
