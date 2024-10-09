import styled from "@emotion/styled";
import { colors } from "styles/colors";

export const ContactUsFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${colors.BACKGROUND_WHITE};
  border-radius: 5px;
  padding: 40px;
  gap: 20px;
  width: 600px;
  height: 100%;
`;

export const Title = styled.p`
  color: #000000;
  font-size: 24px;
  font-weight: normal;
`;

export const InputsContainer = styled.input`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
