import Footer from '../footer';
import Content from './HomeItems';
import Content2 from './HomeItems2';
import Content3 from './HomeItems3';
import React, { Component } from 'react';

import axios from 'axios';
import './Home.css'
import { 
  Col, Row, Container, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';

export default class Home extends Component{
  constructor() {
    super();
    this.state = {
      users:[],
      main: []
    };

    // this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios
    .get("http://localhost:5000/getNews1") 
      .then(response =>{
        this.setState({
          users:response.data.articles
        });
      })
      .catch(error => {
        alert(error);
      });

    // axios
    // .get(url2) 
    //   .then(response => 
    //     response.data.articles.map(main =>({
    //       title: `${main.title}`,
    //       description: `${main.description}`,
    //       image: `${main.urlToImage}`,
    //       content:`${main.content}`
    //     }))
    //   )
    //   .then(main =>{
    //     this.setState({
    //       main,
    //       isLoading: false
    //     });
    //   })
    //   .catch(error => 
    //     this.setState({
    //       error, 
    //       isLoading:false
    //     }) 
    //   );
  }

  handleSubmit(){
    const d = this.state
    console.log("dsd")
    axios.post('http://localhost:5000/post',{
      users: this.state
    })
  }
  
  render(){
    const d = this.state.users;
    console.log(d);
    const news = this.state.users.map(item =>{
      return(
        <Col sm="4">
          <div>
            <Card id="size">
              <CardImg top width="100%" src={item.urlToImage} alt="Card image cap" />
              <CardBody>
                <CardTitle>{item.title}</CardTitle>
                <CardSubtitle id="subtitle">{item.description}</CardSubtitle>
                <CardText>{item.content}</CardText>
              </CardBody>
              <CardFooter>
                <Button id="save_btn" onClick ={this.handleSubmit}>Save</Button>
                <Button id="read-btn" href={item.url} target="_blank">Read More</Button>
              </CardFooter>
              </Card>
              <br/>
            </div>
        </Col>
        // <p>{item.title}</p>
      )
    })
    // const news2 = this.state.main2.map(item2 =>{
    //   return(
    //     // <Col sm="4">
    //     //   <Content2 key ={item2.id} item2 ={item2}/>
    //     // </Col>
    //     <p>{item2.name}</p>
    //   )
    // })
    
    return(
      <div>
        <Container>
          <h1>Top Headlines</h1>
        </Container>
        <Container>
         {/* {news} */}
        <Row>
          {news}
        </Row>
      </Container>
    </div>
    )         
  }
}