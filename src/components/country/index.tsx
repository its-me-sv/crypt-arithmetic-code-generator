import React from 'react';

import {FlagsContainer, FlagHolder, Flag} from './styles';

import {useThemeContext} from '../../contexts/theme.context';
import {useLanguageContext} from '../../contexts/language.context';

const flags: Array<string> = [
  require("../../assets/flags/chn.png"), require("../../assets/flags/esp.png"),
  require("../../assets/flags/fr.png"), require("../../assets/flags/ind.png"),
  require("../../assets/flags/rus.png"), require("../../assets/flags/skr.png"),
  require("../../assets/flags/uae.png"), require("../../assets/flags/usa.png"),
];

interface CountryProps {}

const Counrty: React.FC<CountryProps> = () => {
  const {dark} = useThemeContext();
  const {language, setLanguage} = useLanguageContext();

  return (
    <FlagsContainer dark={dark}>
        {flags.map((v, i) => (
          <FlagHolder 
            key={i} 
            dark={dark}
            onClick={() => setLanguage!(i)}
            disabled={language === i}
          >
            <Flag src={v} />
          </FlagHolder>
        ))}
    </FlagsContainer>
  );
};

export default Counrty;
