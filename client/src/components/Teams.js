import Footer from './footer';
import React, { Component } from 'react';

import axios from 'axios';
import {
  Container, Row, Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';

const url = 'http://api.football-data.org/v2/competitions/2019/teams';
const token = 'c73d1cb1e85c4d39b6e710c54b4a5266';

export default class Team extends Component{

  constructor() {
    super();
    this.state = {
      teams:[],
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
        response.data.teams.map(teams =>({
          id: `${teams.id}`,
          name: `${teams.name}`,
          short: `${teams.tla}`,
          image: `${teams.crestUrl}`,
          area: `${teams.venue}`,
          founded: `${teams.founded}`
        }))
      )
      .then(teams=>{
        this.setState({
          teams
        });
      })
      .catch(error => 
        this.setState({
          error
        }) 
      );
  }

  render(){
    const team = this.state.teams.map(item=>{
      return(
        <Col sm="4">
        <div>
          <Card key={item.id} id="size">
              <CardImg top width="100%" src={item.image} alt="Card image cap" />
              <CardBody>
                <CardTitle>{item.name} ({item.short})</CardTitle>
                <CardSubtitle id="subtitle">Founded : {item.founded}</CardSubtitle>
                <CardSubtitle id="subtitle">Stadium : {item.area}</CardSubtitle>
              </CardBody>
              </Card>
              <br/>
        </div>
      </Col>
      )
    })
    return(
      <div>
        <Container>
          <Row>
            {team}
          </Row>
        </Container>
        <Container>
          <Footer/>
        </Container>
      </div>
    );
  }

}