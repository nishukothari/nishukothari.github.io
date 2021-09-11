import React from "react";
import "../public/styles/HomeView.css";
import { Carousel, CarouselItem } from "react-bootstrap";

class HomeView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Carousel>
          <CarouselItem></CarouselItem>
          <CarouselItem></CarouselItem>
          <CarouselItem></CarouselItem>
        </Carousel>
      </div>
    );
  }
}

export default HomeView;
