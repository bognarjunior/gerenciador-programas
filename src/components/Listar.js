import React, { Component } from 'react'
import { Alert, Row, Col } from 'reactstrap';
import Atracao from './Atracao';

const KEYSTORAGE = "Atracoes";
export default class Listar extends Component {
  
  state = {
    listaAtracoes: [],
    isLoad: false
  }

  componentDidMount() {
    this.getList();
  }

  getList = () => {
    let storage = localStorage.getItem(KEYSTORAGE);
    storage = JSON.parse(storage);
    this.setState({
      listaAtracoes: storage || [],
      isLoad: true
    })
  }

  renderList = () => {
    const { listaAtracoes } = this.state;
    if (listaAtracoes.length === 0) {
      return (
        <Col>
          <Alert color="danger">
            Não existe nenhuma atração cadastrada
          </Alert>
        </Col>
      )
    }
    return listaAtracoes.map(item => {
      return (
        <Atracao item={item}/>
      )
    });
  }
  
  
  render() {
    return (
      <Row>
      {
        this.state.isLoad ?
          this.renderList()
        : null
      }
      </Row>
    )
  }
}
