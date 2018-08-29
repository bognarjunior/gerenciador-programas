import React from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col
} from 'reactstrap';

export default (props) => {
  return (
    <Col sm="3" key={props.item.title}>
      <Card>
        <CardImg top width="100%" src={props.item.urlImage} alt={props.item.title} />
        <CardBody>
          <CardTitle>{props.item.media}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>{props.item.title}</CardText>
        </CardBody>
      </Card>
    </Col>
  )
}
