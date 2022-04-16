import styled from "styled-components";

export const FlagsContainer = styled.div<{ dark?: boolean }>`
  position: absolute;
  top: 1.4%;
  right: 0.7%;
  padding: 0.35% 0.56%;
  background-color: #f5f4f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.42rem;
  border-radius: 0.42rem;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.7);
  ${(props) =>
    props.dark &&
    `
    box-shadow: 1px 1px 5px 1px rgba(245, 244, 249, 0.7);
    -webkit-box-shadow: 1px 1px 5px 1px rgba(245, 244, 249, 0.7);
    -moz-box-shadow: 1px 1px 5px 1px rgba(245, 244, 249, 0.7);
    background-color: #171717;
  `}
`;

export const FlagHolder = styled.div<{ dark?: boolean; disabled?: boolean }>`
  width: 2.4rem;
  /* height: auto; */
  cursor: pointer;
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10% 10%;
  background-color: #f5f4f9;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.7);
  ${(props) =>
    props.dark &&
    `
    box-shadow: 1px 1px 5px 1px rgba(245, 244, 249, 0.7);
    -webkit-box-shadow: 1px 1px 5px 1px rgba(245, 244, 249, 0.7);
    -moz-box-shadow: 1px 1px 5px 1px rgba(245, 244, 249, 0.7);
    background-color: #171717;
  `}
  ${(props) => props.disabled && `
    cursor: not-allowed;
    opacity: 0.5;
  `}
  ${(props) =>
    !props.dark &&
    props.disabled &&
    `
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.7) inset;
    -webkit-box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.7) inset;
    -moz-box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.7) inset;
  `}
  ${(props) =>
    props.dark &&
    props.disabled &&
    `
    box-shadow: 0px 0px 3px 1px rgba(245,244,249,0.7) inset;
    -webkit-box-shadow: 0px 0px 3px 1px rgba(245,244,249,0.7) inset;
    -moz-box-shadow: 0px 0px 3px 1px rgba(245,244,249,0.7) inset;
  `}
`;

export const Flag = styled.img.attrs({alt: ""})`
  width: 2rem;
  height: auto;
`;