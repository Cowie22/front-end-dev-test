import React from 'react';
import HeaderNav from './Navbar/HeaderNav';
import HomePage from './Home/HomePage';
import './Styles/Styles.scss'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleNavigationClicks = this.handleNavigationClicks.bind(this);
    this.homePageRef = React.createRef();
    this.aboutMeRef = React.createRef();
  }

  handleNavigationClicks(ref) {
    ref.current.scrollIntoView({behavior: 'smooth'})
  }

  render() {
    return (
      <div>
        <div ref={this.homePageRef}>
          <HeaderNav
            handleScroll={this.handleScroll}
            homeRef={this.homePageRef}
          />
          <HomePage
            handleNavigationClicks={this.handleNavigationClicks}
            aboutRef={this.aboutMeRef}
          />
        </div>
        <div ref={this.aboutMeRef}>

        </div>
      </div>
    )
  }
}

export default App