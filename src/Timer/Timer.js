import React, { Component } from 'react';
import styles from './Timer.css';



class Timer extends Component {
  constructor(props){
    super(props);
    this.state = {
      mouseOver: false
    };
  }
  pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }
  onMouseOver() {
    this.setState({
      mouseOver: true
    });
    console.log("ya");
  }
  onMouseOut() {
    this.setState({
      mouseOver: false
    });
    console.log("da");
  }
  render() {
    let renderMin;
    let renderSec;
    renderMin = this.pad(this.props.minutes, 2);
    renderSec = this.pad(this.props.seconds, 2);

    return(
      <div>
        <div className={styles.Timer}>
        {renderMin}
        :
        {renderSec}
        </div>
      </div>
    );


  }
}

export default Timer;
