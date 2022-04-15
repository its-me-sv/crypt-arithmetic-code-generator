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
  text-shadow: 
    1px 0px 1px #ccc, 0px 1px 1px #eee, 
    2px 1px 1px #ccc, 1px 2px 1px #eee,
    3px 2px 1px #ccc, 2px 3px 1px #eee,
    1px 3px 1px #ccc, 3px 4px 1px #eee,
    1px 4px 1px #ccc, 4px 5px 1px #eee,
    1px 1px 1px #ccc, 5px 6px 1px #eee,
    1px 1px 1px #ccc;
  ${(props) =>
    props.dark &&
    `
  text-shadow: 
    1px 0px 1px #4d4b4b, 0px 1px 1px #4d4b4b, 
    2px 1px 1px #4d4b4b, 1px 2px 1px #4d4b4b,
    3px 2px 1px #4d4b4b, 2px 3px 1px #4d4b4b,
    1px 3px 1px #4d4b4b, 3px 4px 1px #4d4b4b,
    1px 4px 1px #4d4b4b, 4px 5px 1px #4d4b4b,
    1px 1px 1px #4d4b4b, 5px 6px 1px #4d4b4b,
    1px 1px 1px #4d4b4b;
  `}
`;

export const ThemeButtonContainer = styled.div<{ dark?: boolean }>`
  padding: 3.6px;
  padding-top: 1.2px;
  position: absolute;
  font-size: 1.2rem;
  top: 1.4%;
  left: 0.7%;
  cursor: pointer;
  border-radius: 0.2rem;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.7);
  ${(props) =>
    props.dark &&
    `
    box-shadow: 0px 0px 3px 1px rgba(245,244,249,0.7);
    -webkit-box-shadow: 0px 0px 3px 1px rgba(245,244,249,0.7);
    -moz-box-shadow: 0px 0px 3px 1px rgba(245,244,249,0.7);
    filter: grayscale(100%);
  `}
  &:hover {
    opacity: 0.7;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.7) inset;
    -webkit-box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.7) inset;
    -moz-box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.7) inset;
    ${(props) =>
      props.dark &&
      `
    box-shadow: 0px 0px 3px 1px rgba(245,244,249,0.7) inset;
    -webkit-box-shadow: 0px 0px 3px 1px rgba(245,244,249,0.7) inset;
    -moz-box-shadow: 0px 0px 3px 1px rgba(245,244,249,0.7) inset;
  `}
  }
`;
