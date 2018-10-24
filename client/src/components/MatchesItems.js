import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardFooter} from 'reactstrap';

export default class ListItems extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
         <p>{this.props.value.name}</p>
      </div>
    );
  }
}
