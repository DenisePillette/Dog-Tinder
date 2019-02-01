import React, {Component} from 'react'
import {
  Grid, Col, Row, ListGroup, ListGroupItem
} from 'react-bootstrap'
import '../styles/dog.css'

class Dogs extends Component {
  render() {
    return (
    <div className="center">
      <Grid>
      <br />
      <h1>Meet Other Dogs!</h1>
      <h3><small className="text-muted">All the Dogs!</small></h3>

      <Row>
        <Col xs={12}>
              <ListGroup>
              {this.props.dogs.map((dog, index) =>{
                return (
                  <ListGroupItem
                    key={index}
                    header={
                      <h4>
                        <span className='dog-name'>
                          {dog.name}
                        </span>
                        <small className='dog-age'> - {dog.age} years old</small>
                      </h4>
                    }>
                    <span className='dog-image'>
                      <img className='dog-image' src={dog.image} alt={dog.name}/>
                    </span>
                    <span className='dog-enjoys'>
                      {dog.enjoys}
                    </span>
                </ListGroupItem>
              )
            })}
          </ListGroup>
        </Col>
      </Row>

      </Grid>
      </div>
    );
  }
}

export default Dogs
