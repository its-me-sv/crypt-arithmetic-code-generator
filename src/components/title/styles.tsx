import styled from "styled-components";

export const TitleText = styled.span<{ dark?: boolean }>`
  padding: 0% 1% 0.5% 1%;
  border-radius: 0.42rem;
  font-family: geomanist-regular;
  font-weight: bold;
  font-size: 3.6rem;
  color: rgba(0, 0, 0, 0.91);
  background-color: #f5f4f9;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.7);
  ${(props) =>
    props.dark &&
    `
    box-shadow: 1px 1px 5px 1px rgba(245, 244, 249, 0.7);
    -webkit-box-shadow: 1px 1px 5px 1px rgba(245, 244, 249, 0.7);
    -moz-box-shadow: 1px 1px 5px 1px rgba(245, 244, 249, 0.7);
    background-color: #171717;
    color: #f5f4f9;
  `}
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
