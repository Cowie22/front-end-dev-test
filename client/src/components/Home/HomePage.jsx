import React from 'react';
import '../Styles/Styles.scss'
import  { MdArrowDropUp, MdArrowDropDown } from 'react-icons/lib/md';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewable: false,
    }
    this.handleViewable = this.handleViewable.bind(this);
  }

  componentDidMount() {
    this.handleViewable()
  }

  handleViewable() {
    this.setState({
      viewable: true,
    })
  }
  render() {
    const arrowUpIcon =
      <MdArrowDropUp
        name="arrow_drop_up"
        size={40}
        color="white"
        transition={'0.3s ease-in'}
      />
    const arrowDownIcon =
      <MdArrowDropDown
        name="arrow_drop_down"
        size={40}
        color="	#E6873F"
      />

    const { handleNavigationClicks, aboutRef, hovered, handleHover, handleLeave } = this.props;
    const { viewable } = this.state;
    return (
      <div className="Home-Page-Container">
        <div className="Home-Info-Container">
        <Slide
          left
          when={viewable}
          duration={1800}
        >
          <h1 className="Welcome">WELCOME TO</h1>
        </Slide>
        <Slide
          right
          when={viewable}
          duration={1800}
        >
          <h2 className="Company-Name">Rooster Grin</h2>
        </Slide>
        </div>
        <Fade
          up
          when={viewable}
          duration={4000}
          distance={'500px'}
        >
          <div className="Home-Button-Container">
            <button className="Home-Button"
              onClick={() => handleNavigationClicks(aboutRef)}
              onMouseEnter={() => setTimeout(() => handleHover(4), 300)}
              onMouseLeave={() => setTimeout(handleLeave, 300)}
            >
            Learn About Us {'  '}{hovered === 4 ? arrowDownIcon : arrowUpIcon}</button>
          </div>
        </Fade>
      </div>
    )
  }
}


export default HomePage