import styled from "styled-components";

export const StarContainer = styled.a<{ dark?: boolean }>`
  line-height: 1.15;
  font-family: geomanist-regular;
  display: block;
  position: fixed;
  bottom: 3em;
  right: -6.5em;
  padding: 0.42em;
  width: 20em;
  text-align: center;
  text-transform: uppercase;
  font-size: 1em;
  letter-spacing: 1.4px;
  text-decoration: none;
  transform: rotate(-45deg);
  transform-origin: 50% 50%;
  background-color: #171717;
  color: #f5f4f9;
  ${(props) => props.dark && `
    background-color: #f5f4f9;
    color: #171717;
  `}
`;