import LinkBar from './components/NavBar';
import Home from './components/Home';
import { Component } from 'react';

class App extends Component {

  render() {
    return (
      <>
        <LinkBar/>
        {/* <WelcomeIntro/> */}
        <Home/>
      </>
    );
  }
}

export default App;