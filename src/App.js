import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import MeditationView from './MeditationView/MeditationView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <MeditationView
            appState="Beginning"
            defaultMinutes={0}
            defaultSeconds={2}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
