import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../Styles/Styles.scss'
import InstagramLogo from '../../../public/front-end-dev-test-assets/instagram.svg';
import FacebookLogo from '../../../public/front-end-dev-test-assets/facebook.svg';
import RoosterGrinLogo from '../../../public/front-end-dev-test-assets/logo-white.svg';


const HeaderNav = (props) => {
  const { pagePosition } = props;
  return (
    // Background color is changed for header nav because it looks better without the background on initial page load
    // But portions can't be seen on the white background below
    <div>
      <Navbar className="navbar fixed-top" style={{background: pagePosition > 700 ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.0)'}}>
        <Navbar.Brand
          // onClick={() => this.props.handleScroll(this.props.homeRef)}
        >
        <RoosterGrinLogo width={300} height={100} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              // onClick={() => this.props.handleScroll(this.props.homeRef)}
            >
            Home
            </Nav.Link>
            <Nav.Link>About Us</Nav.Link>
            <Nav.Link>Appointments</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="https://www.instagram.com/" target="_blank">
              <InstagramLogo width={50} height={50} />
            </Nav.Link>
            <Nav.Link href="https://www.facebook.com" target="_blank">
            <FacebookLogo width={50} height={50} />
            </Nav.Link>
            <Nav.Link href="mailto:rjcowie1@gmail.com" target="_blank">
              <img src="https://cdn4.iconfinder.com/data/icons/rounded-white-basic-ui/139/Mail02-RoundedWhite-512.png" className="icons"/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default HeaderNav