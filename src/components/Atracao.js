import React, { Component } from 'react'
import { Col } from 'reactstrap';

export default class componentName extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      urlImage: null,
      media: null,
      dateFormated: null,
      title: null
    }
  }

  componentDidMount() {
    const {
      urlImage,
      media,
      dateFormated,
      title
    } = this.props.item
    
    this.setState({
      urlImage,
      media,
      dateFormated,
      title
    })
  }

  onErrorImage = () => {
    this.setState({
      urlImage: require('/assets/noImage.png')
    })
  }
  
  render() {
    return (
      <Col sm="3">
        <div className="card" style={styles.card} >
          <img className="card-img-top" src={this.state.urlImage} 
            style={styles.img} alt={this.state.title}
            onError={this.onErrorImage}/>
          <div className="card-body">
            <h5 className="card-title">
              {this.state.media} </h5>
            <h6 className="card-subtitle mb-2 text-muted">{this.state.dateFormated}</h6>
            <p className="card-text">{this.state.title}</p>
          </div>
        </div>
      </Col>
    )
  }
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
