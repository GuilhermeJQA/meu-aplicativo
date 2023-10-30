import React from "react";
import Filho from "./Filho";

const Pai = (props) => {
  return (
    <div>
      <Filho nome="Roberto" sobrenome={props.sobrenome} />
      <Filho nome="Carlos" sobrenome={props.sobrenome} />
      <Filho nome="Mario" sobrenome={props.sobrenome} />
    </div>
  );
};

export default Pai;
