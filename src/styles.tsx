import styled from "styled-components";

export const AppContainer = styled.div<{ dark?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  background-color: #f5f4f9;
  ${(props) => props.dark && `background-color: rgba(0, 0, 0, 0.91);`}
`;

export const Footer = styled.div<{ dark?: boolean }>`
  font-family: Roboto;
  color: #171717;
  font-size: 1.2rem;
  padding: 0% 0.4% 0.2% 0.4%;
  border-radius: 0.42rem;
  background-color: #f5f4f9;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.7);
  span {
    color: #fe4365;
  }
  a {
    text-decoration: none;
    font-weight: bold;
    color: #6cdfea;
    ${(props) => !props.dark && "color: #2a8fbd;"}
  }
  ${(props) =>
    props.dark &&
    `
    box-shadow: 1px 1px 5px 1px rgba(245, 244, 249, 0.7);
    -webkit-box-shadow: 1px 1px 5px 1px rgba(245, 244, 249, 0.7);
    -moz-box-shadow: 1px 1px 5px 1px rgba(245, 244, 249, 0.7);
    background-color: #171717;
    color: #f5f4f9;
  `}
`;
