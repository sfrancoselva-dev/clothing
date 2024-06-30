import { useState } from "react";
import { FormGroup, FormInput, FormLabel } from "./FormField.styles";

const FormField = ({
  formFieldProps: { type, name, id, required, labelText },
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
      />
      <FormLabel for={id} className={`${fieldFocused ? "shrink-label" : ""}`}>
        {labelText}
      </FormLabel>
    </FormGroup>
  );
};

export default FormField;
