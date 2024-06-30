import Button from "../Button/Button.component";
import { BTN_TYPES } from "../Button/Button.component";

import FormHeader from "../FormHeader/FormHeader.component";
import FormContent from "../FormContent/FormContent.component";
import FormFooter from "../FormFooter/FormFooter.component";

import { SignInWrapper } from "./SignIn.styles";
import FormField from "../FormField/FormField.component";

const SignIn = () => {
  return (
    <SignInWrapper>
      <FormHeader>
        <h2>I already have an account</h2>
        <p>Sign in with your email and password</p>
      </FormHeader>
      <FormContent>
        <form>
          <FormField
            formFieldProps={{
              id: "email",
              name: "email",
              type: "email",
              required: true,
              labelText: "Email",
            }}
          />

          <FormField
            formFieldProps={{
              id: "password",
              name: "password",
              type: "password",
              required: true,
              labelText: "Password",
            }}
          />
        </form>
      </FormContent>
      <FormFooter>
        <Button>SIGN IN</Button>
        <Button type={BTN_TYPES.googleSignIn}>SIGN IN WITH GOOGLE</Button>
      </FormFooter>
    </SignInWrapper>
  );
};

export default SignIn;
