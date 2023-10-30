import './App.css';
import React from "react";
import Card from './componentes/layout/Card';
import Primeiro from './componentes/basicos/Primeiro'
import PrimeiroProps from "./componentes/basicos/PrimeiroProps.jsx";
import Fragmento from './componentes/basicos/Fragmento';
import Pai from './componentes/familia/Pai';
import Filho from './componentes/familia/Filho';

export default () => {

    return (
      <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Cards">
          <Card titulo="Filho e sobrenome" color='#DC143C'>
          <h1>Lista de Filhos</h1>
              <Filho nome="Roberto" sobrenome="Silva" />
              <Filho nome="Carlos" sobrenome="Pereira" />
              <Filho nome="Mario" sobrenome="Santos" />
          </Card>
      </div>
      
  </div>
    )

}