import React from 'react';
import '../Styles/Styles.scss'

const HomePage = (props) => {
  return (
    <div className="Home-Page-Container">
      <div className="Home-Info-Container">
        <h1 className="Welcome">WELCOME TO</h1>
        <h2 className="Company-Name">Rooster Grin</h2>
      </div>
      <div className="Home-Button-Container">
        <button className="Home-Button" onClick={() => this.props.handleScroll(this.props.aboutRef)}>Learn About Us</button>
      </div>
    </div>
  )
}

export default HomePage