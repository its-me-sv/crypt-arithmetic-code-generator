import styled from "styled-components";

export const AppContainer = styled.div<{ dark?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f5f4f9;
  ${(props) => props.dark && `background-color: rgba(0, 0, 0, 0.91);`}
`;

export const TitleText = styled.span<{ dark?: boolean }>`
  font-family: geomanist-regular;
  font-weight: bold;
  font-size: 3.6rem;
  color: rgba(0, 0, 0, 0.91);
  ${(props) => props.dark && `color: #f5f4f9;`}
`;
