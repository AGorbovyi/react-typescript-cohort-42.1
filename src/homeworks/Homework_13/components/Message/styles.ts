import styled from "@emotion/styled";

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 10px;
  background-color: #f5f7f8;
  border: 1px solid black;
  border-radius: 5px;
  min-height: 150px;
  max-height: fit-content;

`;

export const MessageTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const MessageText = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
