import React from 'react';
import '../Styles/Styles.scss'
import  { MdArrowDropUp, MdArrowDropDown } from 'react-icons/lib/md';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    }
    this.handleButtonHover = this.handleButtonHover.bind(this);
    this.handleButtonLeave = this.handleButtonLeave.bind(this);
  }

  // The following two function control the up and down arrow for the home page button
  handleButtonHover() {
    this.setState({
      hovered: true,
    })
  }

  handleButtonLeave() {
    this.setState({
      hovered: false,
    })
  }

  render() {
    const arrowUpIcon =
      <MdArrowDropUp
        name="arrow_drop_up"
        size={40}
        color="white"
      />

    const arrowDownIcon =
      <MdArrowDropDown
        name="arrow_drop_down"
        size={40}
        color="black"
      />

    const { handleNavigationClicks, aboutRef } = this.props;
    return (
      <div className="Home-Page-Container">
        <div className="Home-Info-Container">
          <h1 className="Welcome">WELCOME TO</h1>
          <h2 className="Company-Name">Rooster Grin</h2>
        </div>
        <div className="Home-Button-Container">
          <button className="Home-Button"
            onClick={() => handleNavigationClicks(aboutRef)}
            onMouseEnter={this.handleButtonHover}
            onMouseLeave={this.handleButtonLeave}
          >
          Learn About Us {'  '}{this.state.hovered ? arrowDownIcon : arrowUpIcon}</button>
        </div>
      </div>
    )
  }
}


export default HomePage