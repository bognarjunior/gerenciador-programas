import React, { Component } from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';

import { setList } from'./../services';

export default class Cadastro extends Component {
  state = {
    atracoes: {
      title: "",
      media: 'TV',
      urlImage: "",
      date: "",
      time: "",
    },
    isInValid: false
  };

  handleName = (e) => {
    this.setState({
      isInValid: false
    });
    let atracoes = Object.assign({}, this.state.atracoes);
    atracoes.title = e.target.value;
    this.setState({atracoes});
  }

  handleMedia = (e) => {
    let atracoes = Object.assign({}, this.state.atracoes);
    atracoes.media = e.target.value;
    this.setState({atracoes});
  }

  handleUrlImage = (e) => {
    let atracoes = Object.assign({}, this.state.atracoes);
    atracoes.urlImage = e.target.value;
    this.setState({atracoes});
  }

  handleDate = (e) => {
    let atracoes = Object.assign({}, this.state.atracoes);
    atracoes.date = e.target.value;
    this.setState({atracoes});
  }

  handleTime = (e) => {
    let atracoes = Object.assign({}, this.state.atracoes);
    atracoes.time = e.target.value;
    this.setState({atracoes});
  }

  saveItens = () => {
    if(!this.validate()){
      this.setState({
        isInValid: true
      })
      return;
    };
    setList(this.state.atracoes);
    this.props.history.push("/");
  }

  validate = () => {
    const { title } = this.state.atracoes;
    return (title.trim().length < 3) ? false : true;
  }

  cancelForm = () => {
    this.setState({
      title: "",
      media: 'TV',
      urlImage: "",
      date: "",
      time: "",
    });
    this.props.history.push("/");
  }

  render() {
    const { isInValid } = this.state;
    return (
      <Container>
        <Form>
          <Row>
            <Col xs="10">
              <FormGroup>
                <Label for="title">Nome</Label>
                <Input name="title" id="title" value={this.state.atracoes.title} placeholder="Nome da atração" onChange={this.handleName}/>
                {
                isInValid ? 
                  <FormText className="text-danger" color="text-danger">
                    Informe um nome para a atração, com mais de 3 caracteres
                  </FormText> 
                : null
              }
              </FormGroup>
            </Col>
            <Col xs="2">
              <FormGroup>
                <Label for="media">Onde assistir?</Label>
                <Input type="select" name="media" id="media" onChange={this.handleMedia}>
                  <option>TV</option>
                  <option>Cinema</option>
                  <option>Netflix</option>
                  <option>Teatro</option>
                  <option>Internet</option>
                  <option>Outro...</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
          <Col xs="8">
            <FormGroup>
              <Label for="urlImage">Imagem</Label>
              <Input name="urlImage" id="urlImage"  onChange={this.handleUrlImage}/>
              <FormText color="muted">
                Selecione url da internet para adicionar capa a sua atração
              </FormText>
            </FormGroup>
          </Col>
          <Col xs="2">
            <FormGroup>
              <Label for="date">Data</Label>
              <Input type="date" name="date" id="date" placeholder="date placeholder" onChange={this.handleDate}/>
            </FormGroup>
          </Col>
          <Col xs="2">
            <FormGroup>
              <Label for="time">Hora</Label>
              <Input type="time" name="time" id="timr" placeholder="time placeholder" onChange={this.handleTime}/>
            </FormGroup>
          </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-around">
              <Button color="primary" onClick={this.saveItens}>Salvar</Button>
              <Button color="danger" onClick={this.cancelForm}>Cancelar</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    )
  }
}
