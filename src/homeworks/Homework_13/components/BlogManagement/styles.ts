import styled from "@emotion/styled";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 800px;
  height: 100%;
  /* max-height: fit-content; */
  padding: 80px;
  background-color: white;
  border: 2px solid black;
  border-radius: 5px;
`;

export const Textarea = styled.textarea`
  outline: none;
  border: 1px solid black;
  border-radius: 5px;
  min-width: 100%;
  max-width: 100%;
  min-height: 70px;
  padding: 8px;
`;
