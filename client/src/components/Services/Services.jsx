import React from 'react';
import AboutImage from '../../../public/front-end-dev-test-assets/img-1.jpg';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { Nav } from 'react-bootstrap';
import HomeExpertise from '../../../public/front-end-dev-test-assets/home-expertise.svg';
import HomeHygiene from '../../../public/front-end-dev-test-assets/home-hygiene.svg';
import HomeLab from '../../../public/front-end-dev-test-assets/home-lab.svg';
import HomeRetention from '../../../public/front-end-dev-test-assets/home-retention.svg';
import  { MdArrowDropUp, MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/lib/md';


class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 0,
    }
    this.handleDisplay = this.handleDisplay.bind(this);
  }
  // Controls when to display the modal pop-up
  handleDisplay(id) {
    this.setState({
      display: id,
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
        <div className="Services-Container">
          <div className="Services-Info-Container">
            <h2 className="Services-Title">Our Services</h2>
            <h2 className="Services-Sub-Title"><p id="word1">Discover,</p><p id="word2">Design,</p><p id="word3">Implement,</p><p id="word4">Develop,</p><p id="word5">Deliver</p></h2>
            <p className="Services-Info">
            Every website built by Rooster Grin is customized to the needs of our client through our design process. We focus on using images, video and text that make your business stand out from the competition. Our client see higher conversion rates, more traffic and better search rankings because we leverage our experience and a data-driven approach to create the optimal website for your business.  Every website we build is mobile-friendly and will work on a myriad of devices. In addition, we strategically place call-to-actions through your site to increase conversion rates and generate more business. Finally, our websites are competitively priced to give you the best possible site at a reasonable cost.
            </p>
            <button
              className="Services-btn"
              onClick={() => this.handleLearnDisplay()}
              onMouseEnter={() => setTimeout(() => handleHover(7), 300)}
              onMouseLeave={() => setTimeout(handleLeave, 300)}
            >
            {hovered === 7 ? arrowDownIcon : arrowRightIcon } {'  '} Learn More
            </button>
          </div>
          <div className="Service-Icon-Container">
            <div className="Service-Icon-Inner-Container" >
              <div className="Icon-Row">
                <div className="Service-Icon">
                  <div className="Service-Icon-Wrapper">
                    <HomeExpertise width={80} height={80} />
                  </div>
                  <div className="Service-Info-Wrapper">
                    <p>Web Design</p>
                    <p>And Development</p>
                  </div>
                </div>
                <div className="Service-Icon">
                  <div className="Service-Icon-Wrapper">
                    <HomeHygiene width={80} height={80} />
                  </div>
                  <div className="Service-Info-Wrapper">
                    <p>Search Engine</p>
                    <p>Optimization</p>
                  </div>
                </div>
              </div>
              <div className="Icon-Row">
                <div className="Service-Icon">
                  <div className="Service-Icon-Wrapper">
                    <HomeLab width={80} height={80} />
                  </div>
                  <div className="Service-Info-Wrapper">
                    <p>Web</p>
                    <p>Hosting</p>
                  </div>
                </div>
                <div className="Service-Icon">
                  <div className="Service-Icon-Wrapper">
                    <HomeRetention width={80} height={80} />
                  </div>
                  <div className="Service-Info-Wrapper">
                    <p>Health History</p>
                    <p>Forms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="About-Banner-Container">
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
        </div> */}
      </div>
    )
  }
}

export default Services