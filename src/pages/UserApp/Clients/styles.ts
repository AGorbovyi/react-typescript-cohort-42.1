import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 4px;
`;

export const PageTitle = styled.p`
  font-size: 30px;
  font-weight: bold;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 40px;
  gap: 40px;
`;

export const Client = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 300px;
  gap: 20px;
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 300px;
  height: 100px;
`;

export const BlockTitle = styled.div`
  font-family: "Arial", Arial, sans-serif;
  font-weight: 700;
  color: #000000;
  font-size: 24px;
`;

export const BlockText = styled.div`
  font-family: "Arial", Arial, sans-serif;
  font-weight: 400;
  color: #777;
  font-size: 18px;
`;

export const ButtonControl = styled.div`
  width: 200px;
`;
