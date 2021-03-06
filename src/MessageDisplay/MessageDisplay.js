import React, { Component } from 'react';

import './MessageDisplay.css';

class MessageDisplay extends Component {
  constructor(props){
    super(props);
  }
  render() {
    var message = messageMapper[this.props.appState];
    return(
      <div className="MessageDisplay">
        {message}
      </div>
    );
  }
}

var messageMapper = {
  'Beginning': 'Welcome to Meditation',
  'Running': 'Meditation in Progress',
  'Paused' : 'Meditation is Paused',
  'Finished' : 'Meditation Complete',
  'Resetting' : 'Press to Reset'
};


export default MessageDisplay;
