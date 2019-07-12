import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { Nav, ButtonToolbar, DropdownButton, Dropdown } from 'react-bootstrap';
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
    const { hovered, handleHover, handleLeave, handleNavigationClicks, pagePosition, workRef } = this.props;
    // Creates the four drop downs below, title is the given svg icons for this assignment.
    // Pretty Large refactor and has many arguments, but greatly reduces code as this is shared
    // Amongst all icons
    const dropDownMaker = (icon, title, subtitle, item1, item2, item3, item4) => {
      return (
        <div className="Service-Icon">
          <div className="Inner-Icon-Container">
            <div className="Service-Icon-Wrapper">
            <DropdownButton
              drop='left'
              variant="secondary"
              title={icon}
            >
              <Dropdown.Item eventKey="4">Features</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="1">{item1}</Dropdown.Item>
              <Dropdown.Item eventKey="2">{item2}</Dropdown.Item>
              <Dropdown.Item eventKey="3">{item3}</Dropdown.Item>
              <Dropdown.Item eventKey="4">{item4}</Dropdown.Item>
            </DropdownButton>
            </div>
            <div className="Service-Info-Wrapper">
              <p>{title}</p>
              <p>{subtitle}</p>
            </div>
          </div>
        </div>
      )
    }
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
                {dropDownMaker(
                <HomeExpertise width={70} height={70} />,
                'Web Design',
                'And Development',
                'Sitemap',
                'Revisions',
                'Action',
                'Coding'
                )}
                {dropDownMaker(
                <HomeHygiene width={70} height={70} />,
                'Search Design',
                'And Optimization',
                'Get',
                'To The',
                'Top Of',
                'Google'
                )}
              </div>
              <div className="Icon-Row">
                {dropDownMaker(
                <HomeLab width={70} height={70} />,
                'Web',
                'Hosting',
                'Rooster Grin',
                'Hosts and',
                'Maintains',
                'Websites'
                )}
                {dropDownMaker(
                <HomeRetention width={70} height={70} />,
                'Health History',
                'Forms',
                'Digital (Paperless)',
                'Forms with',
                'Embedded',
                'Signatures'
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="Services-Banner-Container">
          <div className="Inner-Service-Banner-Container">
            <Zoom
              duration={2000}
              when={pagePosition > 2200}
            >
              <div className="Services-Banner-Info-Container">
                <h1 className="Services-Banner-Title">INTERESTED ?</h1>
                <h3 className="Services-Banner-Info">CHECK Out More Services</h3>
                <h3 className="Services-Banner-Info">And See What We Can Do For You</h3>
                <Nav.Link href="https://www.roostergrin.com/our-services/web-design-development" target="_blank">
                  <button className="Services-Banner-Btn">
                  HERE
                  </button>
                </Nav.Link>
              </div>
            </Zoom>
            <div className="Outer-Button-Container">
            <div>
              <Fade
                up
                duration={2000}
                when={pagePosition > 2200}
                distance={'400px'}
              >
                <button className="Services-Transition-Button"
                  onClick={() => handleNavigationClicks(workRef)}
                  onMouseEnter={() => setTimeout(() => handleHover(8), 300)}
                  onMouseLeave={() => setTimeout(handleLeave, 300)}
                >
                CHECK OUT OUR WORK {'  '}{hovered === 8 ? arrowDownIcon : arrowUpIcon}</button>
              </Fade>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Services