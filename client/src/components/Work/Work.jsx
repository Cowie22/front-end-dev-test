import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { Nav } from 'react-bootstrap';
import  { MdStar } from 'react-icons/lib/md';
import WorkCarousel from './Carousel/WorkCarousel';


class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      learnDisplayed: false,
    }
    this.handleLearnDisplay = this.handleLearnDisplay.bind(this);
  }
  // Controls when to display the modal pop-up
  handleLearnDisplay() {
    this.setState({
      learnDisplayed: !this.state.learnDisplayed,
    });
  }
  render() {
    const star =
      <MdStar
        name="star"
        size={40}
        color="#ffb300"
      />
    const { hovered, handleHover, handleLeave, handleNavigationClicks, pagePosition, servicesRef } = this.props;
    return (
      <div>
        <div className="Work-Container">
          <div className="Work-Info-Container">
          <Fade
            up
            duration={3100}
            when={pagePosition > 860}
            distance={'400px'}
          >
            <h2 className="Work-Title">Numerous Happy Customers</h2>
            <h3 className="Work-Sub-Title">And Counting...</h3>
          </Fade>
          <Fade
            down
            duration={3100}
            when={pagePosition > 860}
            distance={'400px'}
          >
            <div className="Star-Container">
              <div>{star}</div><div>{star}</div><div>{star}</div><div>{star}</div><div>{star}</div>
            </div>
          </Fade>
          </div>
          <div className="Carousel-Container">
            <WorkCarousel />
          </div>
        </div>
        <div className="Contact-Container">

        </div>
      </div>
    )
  }
}

export default Work