import React from 'react';
import LearnModule from './LearnMore/LearnModule';
import AboutImage from '../../../public/front-end-dev-test-assets/img-1.jpg';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { Nav } from 'react-bootstrap';
import  { MdArrowDropUp, MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/lib/md';
class About extends React.Component {
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
    const { hovered, handleHover, handleLeave, handleNavigationClicks, pagePosition } = this.props;
    return (
      <div>
        <div className="About-Container">
          <div className="About-Info-Container">
            <h2 className="About-Title">Lending A Hand</h2>
            <h3 className="About-Sub-Title">To Help Your Company Reach Its Goals</h3>
            <p className="About-Info">
            Every website built by Rooster Grin is customized to the needs of our client through our design process. We focus on using images, video and text that make your business stand out from the competition. Our client see higher conversion rates, more traffic and better search rankings because we leverage our experience and a data-driven approach to create the optimal website for your business.  Every website we build is mobile-friendly and will work on a myriad of devices. In addition, we strategically place call-to-actions through your site to increase conversion rates and generate more business. Finally, our websites are competitively priced to give you the best possible site at a reasonable cost.
            </p>
            <button
              className="About-btn"
              onClick={() => this.handleLearnDisplay()}
              onMouseEnter={() => setTimeout(() => handleHover(5), 300)}
              onMouseLeave={() => setTimeout(handleLeave, 300)}
            >
            {hovered === 5 ? arrowDownIcon : arrowRightIcon } {'  '} Learn More
            </button>
          </div>
          <div className="About-Image-Container">
            <img src={AboutImage} className="About-Image" />
          </div>
          <LearnModule
            show={this.state.learnDisplayed} onHide={this.handleLearnDisplay}
          />
        </div>
        <div className="About-Banner-Container">
          <Zoom
            duration={2000}
            when={pagePosition > 800}
          >
            <div className="About-Banner-Info-Container">
              <h1 className="About-Banner-Title">INTERESTED ?</h1>
              <h3 className="About-Banner-Info">Check Out Our Terms And Conditions</h3>
              <h3 className="About-Banner-Info">And Schedule A Call</h3>
              <Nav.Link href="https://www.roostergrin.com/terms-and-conditions/" target="_blank">
                <button className="About-Banner-Btn">
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
            <button className="About-Transition-Button"
              onClick={() => handleNavigationClicks(servicesRef)}
              onMouseEnter={() => setTimeout(() => handleHover(6), 300)}
              onMouseLeave={() => setTimeout(handleLeave, 300)}
            >
            CHECK OUT OUR SERVICES {'  '}{hovered === 6 ? arrowDownIcon : arrowUpIcon}</button>
          </Fade>
        </div>
      </div>
    )
  }
}

export default About