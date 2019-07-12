
// Lorem Ipsum was used for the title and description here because I didn't want to assume anything
// About past projects and felt like lorem ipsum was sufficient.

import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../../../public/Images/Image1.jpg'
import image2 from '../../../../public/Images/Image2.jpg'
import image3 from '../../../../public/Images/Image3.jpg'
import image4 from '../../../../public/Images/Image4.jpg'
import image5 from '../../../../public/Images/Image5.jpg'

class WorkCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      index: 0,
      direction: null,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    // Makes the items for the carousel
    const carouselMaker = (img) => {
      return (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img}
            alt="First slide"
            style={{width: '300px', height: '400px'}}
          />
          <Carousel.Caption>
            <h3 style={{color: '#ffb300', fontWeight: 'bolder', fontSize: 34}}>lorem Ipsum</h3>
            <p style={{color: '#fff', background: 'rgba(0,0,0,0.4)'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </Carousel.Caption>
        </Carousel.Item>
      )
    }

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
        className="carousel-photos"
      >
        {carouselMaker(image1)}
        {carouselMaker(image2)}
        {carouselMaker(image3)}
        {carouselMaker(image4)}
        {carouselMaker(image5)}
      </Carousel>
    );
  }
}

export default WorkCarousel;