import { InputProps } from "./types";
import "./styles";
import { error } from "console";
import {
  InputWrapper,
  InputLabel,
  InputContent,
  ErrorContainer,
} from "./styles";

function Input({
  id,
  name,
  type = "text",
  placeholder,
  label,
  disabled,
  error,
  value,
  onChange,
}: InputProps) {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputContent
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        $error={error}
        value={value}
        onChange={onChange}
      />
      <ErrorContainer></ErrorContainer>
    </InputWrapper>
  );
}

export default Input;
