import React from 'react'
import { Col } from 'reactstrap';

export default (props) => {
  return (
    <Col sm="3">
      <div className="card" style={styles.card} >
        <img className="card-img-top" src={props.item.urlImage} 
          style={styles.img} alt={props.item.title} />
        <div className="card-body">
          <h5 className="card-title">
            {props.item.media} </h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.item.dateFormated}</h6>
          <p className="card-text">{props.item.title}</p>
        </div>
      </div>
    </Col>
  )
}

const styles = {
  card: { 
    width: '250',
    height: '350px',
    marginTop: '10px'
  },
  img: {
    width: 'auto',
    height: '200px',
  }
}
