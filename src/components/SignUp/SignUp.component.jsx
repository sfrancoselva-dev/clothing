import FormHeader from "../FormHeader/FormHeader.component";
import FormContent from "../FormContent/FormContent.component";
import FormFooter from "../FormFooter/FormFooter.component";

import { SignUpWrapper } from "./SignUp.styles";
import Button from "../Button/Button.component";
import FormField from "../FormField/FormField.component";

const SignUp = () => (
  <SignUpWrapper>
    <FormHeader>
      <h2>I do not have an account</h2>
      <p>Sign up with your email and password</p>
    </FormHeader>
    <FormContent>
      <form>
        <FormField
          formFieldProps={{
            id: "displayName",
            name: "displayName",
            type: "text",
            required: true,
            labelText: "Display Name",
          }}
        />

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

        <FormField
          formFieldProps={{
            id: "confirmPassword",
            name: "confirmPassword",
            type: "password",
            required: true,
            labelText: "Confirm Password",
          }}
        />
      </form>
    </FormContent>

    <FormFooter>
      <Button>SIGN UP</Button>
    </FormFooter>
  </SignUpWrapper>
);

export default SignUp;
