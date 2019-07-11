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
    }
    this.handleNavigationClicks = this.handleNavigationClicks.bind(this);
    this.handlePagePosition = this.handlePagePosition.bind(this);
    this.homePageRef = React.createRef();
    this.aboutMeRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handlePagePosition);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handlePagePosition);
  }

  handlePagePosition() {
    this.setState({
      pagePosition: window.pageYOffset
    })
  }

  handleNavigationClicks(ref) {
    ref.current.scrollIntoView({behavior: 'smooth'})
  }

  render() {
    const { pagePosition } = this.state
    console.log(this.state.pagePosition)
    return (
      <div>
        <div ref={this.homePageRef}>
          <HeaderNav
            handleScroll={this.handleScroll}
            homeRef={this.homePageRef}
            pagePosition={pagePosition}
          />
          <HomePage
            handleNavigationClicks={this.handleNavigationClicks}
            aboutRef={this.aboutMeRef}
          />
        </div>
        <div ref={this.aboutMeRef}>
          <About />
        </div>
      </div>
    )
  }
}

export default App