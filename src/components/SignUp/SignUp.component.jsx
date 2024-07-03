import FormHeader from "../FormHeader/FormHeader.component";
import FormContent from "../FormContent/FormContent.component";
import FormFooter from "../FormFooter/FormFooter.component";

import { SignUpWrapper } from "./SignUp.styles";
import Button from "../Button/Button.component";
import FormField from "../FormField/FormField.component";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionSigningUp } from "../../store/user/user.action";
import { selectError, selectUser } from "../../store/user/user.selector";

import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const error = useSelector(selectError);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkPasswordMatch = (pwd, confirmedPwd) => {
    return pwd === confirmedPwd;
  };

  const signUpHandler = (e) => {
    e.preventDefault();
    if (checkPasswordMatch(password, confirmedPassword)) {
      dispatch(actionSigningUp(displayName, email, password));
    } else {
      alert("password mismatch");
      return;
    }
  };

  useEffect(() => {
    if (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          alert("This email is already in use");
          break;

        case "auth/weak-password":
          alert("Passwords should be a minimum of 6 characters");
          break;
        default:
          return;
      }
    }
  }, [error]);

  useEffect(() => {
    user && navigate("/");
  }, [user]);

  return (
    <SignUpWrapper>
      <FormHeader>
        <h2>I do not have an account</h2>
        <p>Sign up with your email and password</p>
      </FormHeader>
      <FormContent>
        <form onSubmit={signUpHandler}>
          <FormField
            formFieldProps={{
              id: "displayName",
              name: "displayName",
              type: "text",
              required: true,
              labelText: "Display Name",
              value: displayName,
              setValue: setDisplayName,
            }}
          />

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

          <FormField
            formFieldProps={{
              id: "confirmPassword",
              name: "confirmPassword",
              type: "password",
              required: true,
              labelText: "Confirm Password",
              value: confirmedPassword,
              setValue: setConfirmedPassword,
            }}
          />
          <FormFooter>
            <Button type="submit">SIGN UP</Button>
          </FormFooter>
        </form>
      </FormContent>
    </SignUpWrapper>
  );
};

export default SignUp;
