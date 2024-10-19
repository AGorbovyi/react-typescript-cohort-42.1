import styled from "@emotion/styled";

import { colors } from "styles/colors";

export interface InputComponentStyleProps {
  $error?: string | undefined;
}

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  color: #6f6f6f;
  line-height: 24px;
  font-weight: 400;
  font-family: "Lato", sans-serif;
`;

export const InputComponent = styled.input<InputComponentStyleProps>`
  width: 100%;
  height: 50px;
  border: ${({ $error, disabled }) => {
    if (disabled) {
      return `1px solid ${colors.GREY}`;
    } else {
      if ($error !== undefined) {
        return `2px solid ${colors.ERROR}`;
      } else {
        return "1px solid #3F3F3F";
      }
    }
  }};
  border-radius: 4px;
  padding: 12px;
  gap: 3px;
  outline: none;
  color: #1e1e1e;
  font-size: 16px;
  font-family: "Lato", sans-serif;

  &::placeholder {
    color: #6f6f6f;
    font-size: 16px;
  }
`;

export const ErrorContainer = styled.p`
  font-size: 16px;
  color: ${colors.ERROR};
  font-family: "Lato", sans-serif;
`;
