import styled from "styled-components";

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
  `}
  &:hover {
    /* opacity: 0.7; */
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
