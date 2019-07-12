import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../Styles/Styles.scss'
import  { MdMailOutline } from 'react-icons/lib/md';
import InstagramLogo from '../../../public/front-end-dev-test-assets/instagram.svg';
import FacebookLogo from '../../../public/front-end-dev-test-assets/facebook.svg';
import RoosterGrinLogo from '../../../public/front-end-dev-test-assets/logo-white.svg';
import HeadShake from 'react-reveal/HeadShake';


const HeaderNav = (props) => {
  const MailIcon =
    <MdMailOutline
      name="arrow_right"
      size={50}
      color="black"
    />
  const {
    pagePosition,
    handleNavigationClicks,
    homeRef,
    aboutRef,
    hovered,
    handleHover,
    handleLeave,
    servicesRef,
    workRef
  } = props;
  return (
    // Background color is changed for header nav because it looks better without the background on initial page load
    // But portions can't be seen on the white background below
    <div>
      <Navbar className="navbar fixed-top" style={{background: pagePosition > 700 ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.0)'}}>
        <Navbar.Brand
          onClick={() => handleNavigationClicks(homeRef)}
        >
        <RoosterGrinLogo className="Rooster-Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              onClick={() => handleNavigationClicks(homeRef)}
            >
            Home
            </Nav.Link>
            {/* Handles smooth page navigation using refs */}
            <Nav.Link onClick={() => handleNavigationClicks(aboutRef)}>About Us</Nav.Link>
            <Nav.Link onClick={() => handleNavigationClicks(servicesRef)}>Our Services</Nav.Link>
            <Nav.Link onClick={() => handleNavigationClicks(workRef)}>Our Work</Nav.Link>
            <Nav.Link onClick={() => handleNavigationClicks(workRef)}>Contact</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
          {/* Animations below dependent on hover and they link to social media/mail */}
            <HeadShake
              duration={2000}
              when={hovered === 1}
            >
              <Nav.Link
                href="https://www.instagram.com/" target="_blank"
                onMouseEnter={() => handleHover(1)}
                onMouseLeave={() => handleLeave()}
                style={{background: hovered === 1 ? 'rgba(188, 103, 50, 0.4)' : 'transparent'}}
                >
                <InstagramLogo width={50} height={50} />
              </Nav.Link>
            </HeadShake>
            <HeadShake
              duration={2000}
              when={hovered === 2}
            >
              <Nav.Link
                href="https://www.facebook.com" target="_blank"
                onMouseEnter={() => handleHover(2)}
                onMouseLeave={() => handleLeave()}
                style={{background: hovered === 2 ? 'rgba(188, 103, 50, 0.4)' : 'transparent'}}
              >
              <FacebookLogo width={50} height={50} />
              </Nav.Link>
            </HeadShake>
            <HeadShake
              duration={2000}
              when={hovered === 3}
            >
              <Nav.Link
                href="mailto:info@roostergrin.com" target="_blank"
                onMouseEnter={() => handleHover(3)}
                onMouseLeave={() => handleLeave()}
                style={{background: hovered === 3 ? 'rgba(188, 103, 50, 0.4)' : 'transparent'}}
              >
                {MailIcon}
              </Nav.Link>
            </HeadShake>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default HeaderNav