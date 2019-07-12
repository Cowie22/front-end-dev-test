import React from 'react';
import axios from 'axios';
import HeaderNav from './Navbar/HeaderNav';
import HomePage from './Home/HomePage';
import About from './About/About';
import Services from './Services/Services';
import Work from './Work/Work';
import './Styles/Styles.scss'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forecastData: [],
      pagePosition: 0,
      hovered: 0,
    }
    this.handleNavigationClicks = this.handleNavigationClicks.bind(this);
    this.handlePagePosition = this.handlePagePosition.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.homePageRef = React.createRef();
    this.aboutRef = React.createRef();
    this.servicesRef = React.createRef();
    this.workRef = React.createRef();
  }

  componentWillMount() {
    this.handleGetForecastData();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handlePagePosition);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handlePagePosition);
  }

  // Gets Weather Data.  Simple addition I thought would be cool for any website, but more importantly satisfies the
  // Bonus requirement of utilizing an API and making the page dynamic
  handleGetForecastData() {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=37.7749&lon=-122.4194&APPID=cecb63c29bf8faa4dc6c39fe1c560182&units=imperial`)
    .then(res => {
      let forecastArray = [];
      // This conditional ensures that the weather forecast always gets data from the same time of day
      // The data is given in three hour chunks over 5 days, so the index corresponding to time of day
      // is always changing
        for (let i = 0; i < 40; i++) {
          if (res.data.list[i].dt_txt.includes('18:00:00')) {
            forecastArray.push(res.data.list[i])
          }
        }
        this.setState({
          forecastData: forecastArray,
        })
      })
      .catch(err =>{
        console.log('ERROR', err)
      })
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
    console.log(this.state.pagePosition);
  }

  // Handles which part of the page to jump to for the header navigation and certain buttons
  handleNavigationClicks(ref) {
    ref.current.scrollIntoView({behavior: 'smooth'})
  }

  render() {
    const { pagePosition, hovered, forecastData } = this.state;
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
      // Weather data can take a little while to load.  This conditional ensures that the
      // Rest of the page will not crash before the data is retrieved.
      forecastData.length > 0 ?
      <div>
        <div ref={this.homePageRef}>
          <HeaderNav
            homeRef={this.homePageRef}
            aboutRef={this.aboutRef}
            servicesRef={this.servicesRef}
            workRef={this.workRef}
            {...sharedProps}
          />
          <HomePage
            aboutRef={this.aboutRef}
            forecastData={forecastData}
            {...sharedProps}
          />
        </div>
        <div ref={this.aboutRef}>
          <About
            {...sharedProps}
            servicesRef={this.servicesRef}
          />
        </div>
        <div ref={this.servicesRef}>
          <Services
            {...sharedProps}
            workRef={this.workRef}
          />
        </div>
        <div ref={this.workRef}>
          <Work
            {...sharedProps}
          />
        </div>
      </div>
      :
      <div>
        WAITING FOR WEATHER DATA...
      </div>
    )
  }
}

export default App