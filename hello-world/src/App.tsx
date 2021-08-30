import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';
import LearnReactLink from './LearnReactLink';

class App extends React.Component {
  render() {
    console.log('Hello world component says hello');

    const msg = "It's a great day out in Chicago."
    // this is what gets rendered
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <HelloWorld message={msg} />
          <LearnReactLink />
        </header>
      </div>
    );
  }
}

export default App;
