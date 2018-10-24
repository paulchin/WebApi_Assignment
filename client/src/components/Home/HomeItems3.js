import React, { Component } from 'react';
import {
  
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';

export default class HomeItems extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
              <Card id="size">
              <CardImg top width="100%" src={this.props.item3.image} alt="Card image cap" />
              <CardBody>
                <CardTitle>{this.props.item3.title}</CardTitle>
                <CardSubtitle id="subtitle">{this.props.item3.description}</CardSubtitle>
                <CardText>{this.props.item3.content}</CardText>
              </CardBody>
              <CardFooter>
                <Button id="save_btn">Save</Button>
                <Button id="read-btn" href={this.props.item3.url} target="_blank">Read More</Button>
              </CardFooter>
              </Card>
              <br/>
            </div>
            
    );
  }
}




