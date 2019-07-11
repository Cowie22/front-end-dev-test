import React from 'react';
import AboutImage from '../../../public/front-end-dev-test-assets/img-1.jpg';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <div className="About-Container">
          <div className="About-Info-Container">
            <h2 className="About-Title">Lending A Hand</h2>
            <h3 className="About-Sub-Title">To Help Your Company Reach Its Goals</h3>
            <p className="About-Info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className="About-btn">Pop-Up</button>
          </div>
          <div className="About-Image-Container">
            <img src={AboutImage} className="About-Image" />
          </div>
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