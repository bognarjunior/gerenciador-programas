import React, { Component } from 'react'
import { Alert, Row, Col } from 'reactstrap';

import { getList } from'./../services';

import Atracao from './Atracao';

export default class Listar extends Component {
  
  state = {
    listaAtracoes: [],
    isLoad: false
  }

  componentDidMount() {
    this.getListStore();
  }

  getListStore = () => {
    this.setState({
      listaAtracoes: getList(),
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
        <Atracao item={item} key={item.title}/>
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
