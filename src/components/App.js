import React, { Component } from 'react';
import Cadastro from './Cadastro';
import Listar from './Listar';

class App extends Component {
  render() {
    return (
      <div>
        <Listar/>
        <Cadastro/>
      </div>
    );
  }
}

export default App;
