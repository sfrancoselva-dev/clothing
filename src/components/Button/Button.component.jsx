import { CustomButton } from "./Button.styles";

export const BTN_TYPES = {
  inverted: "inverted",
  googleSignIn: "google-signin",
};

const Button = ({ type, children, className, ...props }) => {
  return (
    <CustomButton className={`${className} ${type}-btn`} {...props}>
      {children}
    </CustomButton>
  );
};

export default Button;
