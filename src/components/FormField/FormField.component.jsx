import { useState } from "react";
import { FormGroup, FormInput, FormLabel } from "./FormField.styles";

const FormField = ({
  formFieldProps: { type, name, id, required, labelText, value, setValue },
  className,
}) => {
  const [fieldFocused, setFieldFocused] = useState(false);
  const onFocusHandler = () => {
    setFieldFocused(true);
  };

  const onBlurHandler = (e) => {
    const formInputvalue = e.target.value.trim();
    if (formInputvalue !== "") return;
    setFieldFocused(false);
  };

  const handleValueChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };
  return (
    <FormGroup>
      <FormInput
        type={type}
        name={name}
        id={id}
        required={required}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        className={className}
        value={value}
        onChange={handleValueChange}
      />
      <FormLabel
        htmlFor={id}
        className={`${fieldFocused ? "shrink-label" : ""}`}
      >
        {labelText}
      </FormLabel>
    </FormGroup>
  );
};

export default FormField;
