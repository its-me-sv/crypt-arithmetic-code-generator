import styled from 'styled-components';

export const InputBox = styled.div<{ dark?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
`;

export const TextInput = styled.input.attrs({
  type: "text",
})<{ dark?: boolean; disabled?: boolean }>`
  ${(props) => props.disabled && `opacity: 0.5;`}
  all: unset;
  font-family: Roboto;
  font-size: 1.4rem;
  color: #171717;
  text-align: center;
  border-radius: 0.42rem;
  outline: none;
  /* width: 14vw; */
  height: 4.9vh;
  text-transform: uppercase;
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
  &:focus {
    box-shadow: 1px 0px 3px 0px rgba(0, 0, 0, 0.7) inset;
    -webkit-box-shadow: 1px 0px 3px 0px rgba(0, 0, 0, 0.7) inset;
    -moz-box-shadow: 1px 0px 3px 0px rgba(0, 0, 0, 0.7) inset;
    ${(props) =>
      props.dark &&
      `
      box-shadow: 1px 0px 3px 0px rgba(245, 244, 249, 0.7) inset;
      -webkit-box-shadow: 1px 0px 3px 0px rgba(245, 244, 249, 0.7) inset;
      -moz-box-shadow: 1px 0px 3px 0px rgba(245, 244, 249, 0.7) inset;
  `}
  }
`;

export const Symbol = styled.span<{ dark?: boolean }>`
  font-size: 2.1rem;
  font-family: Roboto;
  color: rgba(0, 0, 0, 0.91);
  ${(props) => props.dark && `color: #f5f4f9;`}
  text-shadow: 1px 0px 1px #ccc, 0px 1px 1px #eee, 2px 1px 1px #ccc,
    1px 2px 1px #eee, 3px 2px 1px #ccc, 2px 3px 1px #eee, 1px 3px 1px #ccc,
    3px 4px 1px #eee, 1px 4px 1px #ccc, 4px 5px 1px #eee, 1px 1px 1px #ccc,
    5px 6px 1px #eee, 1px 1px 1px #ccc;
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

export const Actions = styled.div<{ dark?: boolean }>`
  margin-top: 1%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Message = styled.span<{ error?: boolean }>`
  font-family: Roboto;
  font-size: 1.4rem;
  color: #4bb543;
  ${(props) => props.error && `color: #ff9494;`}
`;

export const Button = styled.button<{ dark?: boolean; disabled?: boolean }>`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: geomanist-regular;
  font-size: 1.2rem;
  border-radius: 0.42rem;
  padding: 0.5% 1.4%;
  cursor: pointer;
  background-color: #171717;
  color: #f5f4f9;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.7);
  ${(props) =>
    props.dark &&
    `
    background-color: #f5f4f9;
    color: #171717;
    box-shadow: 1px 1px 5px 1px rgba(245, 244, 249, 0.7);
    -webkit-box-shadow: 1px 1px 5px 1px rgba(245, 244, 249, 0.7);
    -moz-box-shadow: 1px 1px 5px 1px rgba(245, 244, 249, 0.7);
  `}
  &:hover {
    color: rgba(244, 245, 249, 0.5);
    box-shadow: 1px 0px 3px 0px rgba(0, 0, 0, 0.7) inset;
    -webkit-box-shadow: 1px 0px 3px 0px rgba(0, 0, 0, 0.7) inset;
    -moz-box-shadow: 1px 0px 3px 0px rgba(0, 0, 0, 0.7) inset;
    ${(props) =>
      props.dark &&
      `
      color: rgba(23, 23, 23, 0.5);
      box-shadow: 1px 0px 3px 0px rgba(244, 245, 249, 0.7) inset;
     -webkit-box-shadow: 1px 0px 3px 0px rgba(244, 245, 249, 0.7) inset;
     -moz-box-shadow: 1px 0px 3px 0px rgba(244, 245, 249, 0.7) inset;
  `}
  }
  ${(props) => props.disabled && `opacity: 0.5;`}
`;

export const Container = styled.div<{ dark?: boolean }>`
  padding: 0.7%;
  display: flex;
  flex-direction: column;
  gap: 0.21rem;
  border-radius: 0.7rem;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.7);
  ${(props) =>
    props.dark &&
    `
    box-shadow: 1px 1px 5px 1px rgba(245, 244, 249, 0.7);
    -webkit-box-shadow: 1px 1px 5px 1px rgba(245, 244, 249, 0.7);
    -moz-box-shadow: 1px 1px 5px 1px rgba(245, 244, 249, 0.7);
  `}
`;

export const CodeContainer = styled.textarea.attrs({
  readOnly: true,
  rows: 18,
})<{ dark?: boolean }>`
  margin-top: 1%;
  margin-bottom: 0.42%;
  padding-left: 1%;
  font-size: 1rem;
  resize: none;
  border-radius: 0.42rem;
  outline: none;
  border: none;
  color: transparent;
  background-color: #f5f4f9;
  box-shadow: 1px 1px 5px 1px rgba(244, 245, 249, 0.5);
  -webkit-box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.7);
  text-shadow: 0px 0px 0px #171717;
  ${(props) =>
    props.dark &&
    `
    box-shadow: 1px 1px 5px 1px rgba(245, 244, 249, 0.7);
    -webkit-box-shadow: 1px 1px 5px 1px rgba(245, 244, 249, 0.7);
    -moz-box-shadow: 1px 1px 5px 1px rgba(245, 244, 249, 0.7);
    background-color: #171717;
    text-shadow: 0px 0px 0px #f5f4f9;
  `}
  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  /* width */
  &::-webkit-scrollbar {
    width: 0.42rem;
    height: 0.42rem;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    border-radius: 2px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    border-radius: 0.7rem;
    background-color: rgb(23, 23, 23, 0.7);
    ${(props) => props.dark && `background-color: rgb(244, 245, 249, 0.7)`}
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    opacity: 0;
  }
`; 
