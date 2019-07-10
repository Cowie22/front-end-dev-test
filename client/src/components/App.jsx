import React from 'react';
import HeaderNav from './Navbar/HeaderNav';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <HeaderNav />
      </div>
    )
  }
}

export default App