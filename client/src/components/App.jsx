import React from 'react';
import HeaderNav from './Navbar/HeaderNav';
import HomePage from './Home/HomePage';
import About from './About/About';
import LearnModule from './LearnMore/LearnModule';
import './Styles/Styles.scss'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pagePosition: 0,
      hovered: 0,
      learnDisplayed: 0,
    }
    this.handleNavigationClicks = this.handleNavigationClicks.bind(this);
    this.handlePagePosition = this.handlePagePosition.bind(this);
    this.handleLearnDisplay = this.handleLearnDisplay.bind(this);
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

  handlePagePosition() {
    this.setState({
      pagePosition: window.pageYOffset
    })
  }

  handleNavigationClicks(ref) {
    ref.current.scrollIntoView({behavior: 'smooth'})
  }

  handleLearnDisplay() {
    this.setState({
      learnDisplayed: 100,
    });
    console.log(this.state.learnDisplayed)
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
            handleLearnDisplay={this.handleLearnDisplay}
          />
        </div>
        {this.state.learnDisplayed === 0 ?
        <div>
          <LearnModule
            handleLearnDisplay={this.handleLearnDisplay}
            learnDisplayed={this.state.learnDisplayed}
          />

        </div>
        :
        <div>

        </div>
      }
      </div>
    )
  }
}

export default App