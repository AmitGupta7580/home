import LinkBar from './components/NavBar';
import Home from './components/Home';
import { Component } from 'react';
import { CONSTANTS, BackgroundImages } from './components/Data';
import backgroundImage from './images/bgimage.jpg'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundurl: BackgroundImages[CONSTANTS.bgidx]
    };
}

  changeBackground = () => {
    this.setState({
      backgroundurl: BackgroundImages[CONSTANTS.bgidx]
    });
  }

  render() {
    const bodyStyle={
      backgroundImage: `url(${this.state.backgroundurl})`,
      height:'100vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };
    return (
      <div style={ bodyStyle }>
        <LinkBar/>
        {/* <WelcomeIntro/> */}
        <Home changeBackground={ this.changeBackground }/>
      </div>
    );
  }
}

export default App;