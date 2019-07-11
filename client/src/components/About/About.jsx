import React from 'react';
import LearnModule from './LearnMore/LearnModule';
import AboutImage from '../../../public/front-end-dev-test-assets/img-1.jpg';
import  { MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/lib/md';
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      learnDisplayed: false,
    }
    this.handleLearnDisplay = this.handleLearnDisplay.bind(this);
  }
  handleLearnDisplay() {
    this.setState({
      learnDisplayed: !this.state.learnDisplayed,
    });
    console.log(this.state.learnDisplayed)
  }
  render() {
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
    const { hovered, handleHover, handleLeave } = this.props;
    return (
      <div>
        <div className="About-Container">
          <div className="About-Info-Container">
            <h2 className="About-Title">Lending A Hand</h2>
            <h3 className="About-Sub-Title">To Help Your Company Reach Its Goals</h3>
            <p className="About-Info">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
            <button
              className="About-btn"
              onClick={() => this.handleLearnDisplay()}
              onMouseEnter={() => setTimeout(() => handleHover(5), 300)}
              onMouseLeave={() => setTimeout(handleLeave, 300)}
            >
            {hovered === 5 ? arrowDownIcon : arrowRightIcon } {'  '} Learn More
            </button>
          </div>
          <div className="About-Image-Container">
            <img src={AboutImage} className="About-Image" />
          </div>
          <LearnModule
            show={this.state.learnDisplayed} onHide={this.handleLearnDisplay}
          />
        </div>
        <div className="About-Banner-Container">
          <div className="About-Banner-Info-Container">

          </div>
        </div>
      </div>
    )
  }
}

export default About