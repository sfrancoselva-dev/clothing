import { CustomButton } from "./Button.styles";

export const BTN_TYPES = {
  inverted: "inverted",
};

const Button = ({ type, children }) => {
  return <CustomButton className={`${type}-btn`}>{children}</CustomButton>;
};

export default Button;
