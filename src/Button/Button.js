import React, { Component } from 'react';

import styles from './Button.css';

import buttonimage from '../multidimensionalmeditator.png';
import finishedimage from '../complete.png';

class Button extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    if (this.props.appState=="Finished"){
      return <div className={styles.Button}><img src={finishedimage} width='83px' height='83px' onClick={this.handleClick}/></div>
    } else {
      return <div className={styles.Button}><img src={buttonimage} width='83px' height='83px' onClick={this.handleClick}/></div>
    }
  }
}

export default Button;
