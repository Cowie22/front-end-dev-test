import React from 'react';
import HeaderNav from './Navbar/HeaderNav';
import HomePage from './Home/HomePage';
import About from './About/About';
import './Styles/Styles.scss'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pagePosition: 0,
      hovered: 0,
    }
    this.handleNavigationClicks = this.handleNavigationClicks.bind(this);
    this.handlePagePosition = this.handlePagePosition.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.homePageRef = React.createRef();
    this.aboutRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handlePagePosition);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handlePagePosition);
  }

  // Following two functions handle the hovered cases for any icons/buttons so that a boolean
  // Can be set up.  And if the boolean condition is met, an animation will occur
  handleHover(id) {
    this.setState({
      hovered: id,
    })
  }

  handleLeave() {
    this.setState({
      hovered: 0,
    })
  }

  // Scroll event listener helps for conditional rendering on certain page depths
  handlePagePosition() {
    this.setState({
      pagePosition: window.pageYOffset
    })
  }

  // Handles which part of the page to jump to for the header navigation and certain buttons
  handleNavigationClicks(ref) {
    ref.current.scrollIntoView({behavior: 'smooth'})
  }

  render() {
    const { pagePosition, hovered } = this.state;
    // Props passed to all App children
    const sharedProps = {
      handleNavigationClicks: this.handleNavigationClicks,
      hovered: hovered,
      pagePosition: pagePosition,
      handleScroll: this.handlePagePosition,
      handleHover: this.handleHover,
      handleLeave: this.handleLeave,
    }
    return (
      <div>
        <div ref={this.homePageRef}>
          <HeaderNav
            homeRef={this.homePageRef}
            aboutRef={this.aboutRef}
            {...sharedProps}
          />
          <HomePage
            aboutRef={this.aboutRef}
            {...sharedProps}
          />
        </div>
        <div ref={this.aboutRef}>
          <About
            {...sharedProps}
          />
        </div>
      </div>
    )
  }
}

export default App