import React, { Component } from 'react';
import  {Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask, Container } from 'mdbreact';

import axios from 'axios';
const token = '8a331e64c829479b91bbb3c54b0b4d9f';
const carouselUrl = `https://newsapi.org/v2/everything?sources=talksport&apiKey=${token}`;

export default class CarouselPage extends Component {
  constructor() {
    super();
    this.state ={
      data:[],
      count:0
    }
  }

  componentDidMount(){
    axios
    .get(carouselUrl) 
      .then(response => 
        response.data.articles.map(data =>({
          title: `${data.title}`,
          description: `${data.description}`,
          image: `${data.urlToImage}`,
          url: `${data.url}`
        }))
      )
      .then(data =>{
        this.setState({
          data
        });
      })
      .then(response=> response.data.map(count =>({
        count: `${count.totalResults}`
      })) 
      )
      .then(count=>{
        this.setState({
          count
        });
      })
      .catch(error => 
        this.setState({
          error, 
        }) 
      );
  }
  render(){
      const carousel = this.state.data.map(c =>{
        return(
          <View>
            <img className="d-block w-100" src={c.image} alt="First slide" key={c.id} />
              <Mask overlay="black-light"></Mask>
                <CarouselCaption>
                  <h3 className="h3-responsive" key={c.id}>{c.title}</h3>
                  <p key={c.id}>{c.description}</p>
                </CarouselCaption>
            </View>   
        )
      })
      return(
        <Container>
          <h4 className="mt-5 mb-2">Featured News</h4>
          <Carousel
            activeItem={1}
            length={4}
            showControls={true}
            showIndicators={false}
            className="z-depth-1">
            <CarouselInner>
              <CarouselItem>
                {carousel}                 
              </CarouselItem>
            </CarouselInner>
          </Carousel>
        </Container>
      );
  }
}