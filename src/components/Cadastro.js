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

const KEYSTORAGE = "Atracoes";

export default class Cadastro extends Component {
  state = {
    title: "",
    media: 'TV',
    urlImage: "",
    date: "",
    time: "",
  };

  handleName = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  handleMedia = (e) => {
    this.setState({
      media: e.target.value
    });
  }

  handleUrlImage = (e) => {
    this.setState({
      urlImage: e.target.value
    });
  }

  handleDate = (e) => {
    this.setState({
      date: e.target.value
    });
  }

  handleTime = (e) => {
    this.setState({
      time: e.target.value
    });
  }

  saveItens = () => {
    if (localStorage.hasOwnProperty(KEYSTORAGE)) {
      let storage = localStorage.getItem(KEYSTORAGE);
      storage = JSON.parse(storage);
      storage.push(this.state)
      localStorage.setItem(KEYSTORAGE, JSON.stringify(storage));
    } else {
      const attractions = [this.state];
      localStorage.setItem(KEYSTORAGE, JSON.stringify(attractions));
    }
  }

  cancelForm = () => {
    this.setState({
      title: "",
      media: 'TV',
      urlImage: "",
      date: "",
      time: "",
    });
  }

  render() {
    return (
      <Container>
        <Form>
          <Row>
            <Col xs="10">
              <FormGroup>
                <Label for="title">Nome</Label>
                <Input name="title" id="title" value={this.state.title} placeholder="Nome da atração" onChange={this.handleName}/>
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
