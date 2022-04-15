import React from 'react';

import {TitleText} from './styles';

import {useThemeContext} from '../../contexts/theme.context';

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({text}) => {
  const {dark} = useThemeContext();
  return <TitleText dark={dark}>{text}</TitleText>;
};

export default Title;
