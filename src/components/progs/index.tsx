import React from "react";

import {ProgsContainer, Prog} from './styles';

import {useThemeContext} from "../../contexts/theme.context";
import {useProgContext} from "../../contexts/prog.context";

const progs: Array<string> = [
  require("../../assets/progs/c.png"), require("../../assets/progs/cpp.png"), 
  require("../../assets/progs/python.png"),
  require("../../assets/progs/js.png"), require("../../assets/progs/ts.png"),
];

interface ProgsProps {}

const Progs: React.FC<ProgsProps> = () => {
  const {dark} = useThemeContext();
  const {prog, setProg} = useProgContext();

  return (
    <ProgsContainer>
      {progs.map((v, i) => (
        <Prog
          key={i}
          dark={dark}
          onClick={() => setProg!(i)}
          disabled={prog === i}
          src={v}
        />
      ))}
    </ProgsContainer>
  );
};

export default Progs;
