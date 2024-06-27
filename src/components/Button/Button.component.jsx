import { CustomButton } from "./Button.styles";

export const BTN_TYPES = {
  inverted: "inverted",
};

const Button = ({ type, children, className }) => {
  return (
    <CustomButton className={`${className} ${type}-btn`}>
      {children}
    </CustomButton>
  );
};

export default Button;
