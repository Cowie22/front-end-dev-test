import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { Nav } from 'react-bootstrap';
import  { MdArrowDropUp, MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/lib/md';


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
    const arrowUpIcon =
      <MdArrowDropUp
        name="arrow_drop_up"
        size={40}
        color="white"
        transition={'0.3s ease-in'}
      />
    const arrowRightIcon =
      <MdKeyboardArrowRight
        name="arrow_right"
        size={40}
        color="black"
        transition={'0.3s ease-in'}
      />
    const arrowDownIcon =
      <MdKeyboardArrowDown
        name="arrow_drop_down"
        size={40}
        color="	#E6873F"
      />
    const { hovered, handleHover, handleLeave, handleNavigationClicks, pagePosition, servicesRef } = this.props;
    return (
      <div>
        <div className="Work-Container">
          <div className="Work-Info-Container">
            <h2 className="Work-Title">Numerous Happy Customers</h2>
            <h3 className="Work-Sub-Title">And Counting...</h3>
            <button
              className="Work-btn"
              onClick={() => this.handleLearnDisplay()}
              onMouseEnter={() => setTimeout(() => handleHover(9), 300)}
              onMouseLeave={() => setTimeout(handleLeave, 300)}
            >
            {hovered === 9 ? arrowDownIcon : arrowRightIcon } {'  '} Learn More
            </button>
          </div>
          <div>

          </div>
        </div>
        {/* <div className="Work-Banner-Container">
          <Zoom
            duration={2000}
            when={pagePosition > 800}
          >
            <div className="Work-Banner-Info-Container">
              <h1 className="Work-Banner-Title">INTERESTED ?</h1>
              <h3 className="Work-Banner-Info">Check Out Our Terms And Conditions</h3>
              <h3 className="Work-Banner-Info">And Schedule A Call</h3>
              <Nav.Link href="https://www.roostergrin.com/terms-and-conditions/" target="_blank">
                <button className="Work-Banner-Btn">
                HERE
                </button>
              </Nav.Link>
            </div>
          </Zoom>
          <Fade
            up
            duration={2000}
            when={pagePosition > 860}
            distance={'400px'}
          >
            <button className="Work-Transition-Button"
              onClick={() => handleNavigationClicks(servicesRef)}
              onMouseEnter={() => setTimeout(() => handleHover(6), 300)}
              onMouseLeave={() => setTimeout(handleLeave, 300)}
            >
            CHECK OUT OUR WORK {'  '}{hovered === 6 ? arrowDownIcon : arrowUpIcon}</button>
          </Fade>
        </div> */}
      </div>
    )
  }
}

export default Work