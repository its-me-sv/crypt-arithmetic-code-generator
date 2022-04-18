import React from "react";
import styled from "styled-components";

import {useThemeContext} from '../../contexts/theme.context';

const LoaderContainer = styled.div`
  margin-top: 1%;
  align-self: center;
`;

const Loader = styled.div<{ dark?: boolean }>`
  display: inline-block;
  width: 1rem;
  height: auto;
  opacity: 0.7;
  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #171717;
    border-color: #171717 transparent #171717 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
    ${(props) =>
      props.dark &&
      `
      border: 6px solid #f5f4f9;
      border-color: #f5f4f9 transparent #f5f4f9 transparent;
      animation: lds-dual-ring 1.2s linear infinite;
    `}
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;


interface BlockLoaderProps {}

const BlockLoader: React.FC<BlockLoaderProps> = () => {
  const {dark} = useThemeContext();
  return (
    <LoaderContainer>
      <Loader dark={dark} />
    </LoaderContainer>
  );
};

export default BlockLoader;
