import React from 'react';
import  { MdMailOutline } from 'react-icons/lib/md';
import InstagramLogo from '../../../public/front-end-dev-test-assets/instagram.svg';
import FacebookLogo from '../../../public/front-end-dev-test-assets/facebook.svg';
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
      const MailIcon =
      <MdMailOutline
        name="arrow_right"
        size={62}
        color="black"
       />
    const { hovered, handleHover, handleLeave, pagePosition } = this.props;
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
          {/* Child component which contains the carousel on the bottom of the page */}
            <WorkCarousel />
          </div>
        </div>
        <div className="Contact-Container">
            Follow/Contact Us:
          <div className="Contact-Icon-Container">
            <div className="Contact-Icon">
              <Nav.Link
                href="https://www.instagram.com/" target="_blank"
                onMouseEnter={() => handleHover(10)}
                onMouseLeave={() => handleLeave()}
                style={{background: hovered === 10 ? 'rgba(188, 103, 50, 0.4)' : 'transparent'}}
                >
                <InstagramLogo width={50} height={50} />
              </Nav.Link>
            </div>
            <div className="Contact-Icon">
              <Nav.Link
                href="https://www.facebook.com" target="_blank"
                onMouseEnter={() => handleHover(11)}
                onMouseLeave={() => handleLeave()}
                style={{background: hovered === 11 ? 'rgba(188, 103, 50, 0.4)' : 'transparent'}}
              >
              <FacebookLogo width={50} height={50} />
              </Nav.Link>
            </div>
            <div className="Contact-Icon">
              <Nav.Link
                href="mailto:info@roostergrin.com" target="_blank"
                onMouseEnter={() => handleHover(12)}
                onMouseLeave={() => handleLeave()}
                style={{background: hovered === 12 ? 'rgba(188, 103, 50, 0.4)' : 'transparent'}}
              >
                {MailIcon}
              </Nav.Link>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Work