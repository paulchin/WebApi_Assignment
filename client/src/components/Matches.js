import Footer from './footer';
import List from './Teams';
import React, { Component } from 'react';

import axios from 'axios';
import { 
  Col, Row, Container,ListGroup, ListGroupItemHeading, ListGroupItem, ListGroupItemText 
} from 'reactstrap';

const url = 'http://api.football-data.org/v2/competitions?plan=TIER_ONE';
const token = 'c73d1cb1e85c4d39b6e710c54b4a5266';

export default class Matches extends Component{
  constructor(){
    super();
    this.state ={
      main:[]
    };
  }
  componentDidMount() {
    axios
    .get(url,{
      headers:{
        'X-Auth-Token':token
      }
    }) 
      .then(response => 
        response.data.competitions.map(main =>({
          id: `${main.id}`,
          name: `${main.name}`,
          area: `${main.area.name}`
        }))
      )
      .then(main=>{
        this.setState({
          main
        });
      })
      .catch(error => 
        this.setState({
          error
        }) 
      );
  }

  render(){
    
    const comp = this.state.main.map(item =>{
      return(
        <Row>
          <Col sm="4">
            <p>{item.id}</p>
          </Col>
          <Col sm="4">
            <p>{item.name}</p>
          </Col>
          <Col sm="4">
            <p>{item.area}</p>
          </Col>
        </Row>
        
      )
    })
    return(
      <div>
        <Container>
        {comp}
        </Container>
        <Footer/>
      </div>
    );
  }
}