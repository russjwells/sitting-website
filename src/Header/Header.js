import React, { Component } from 'react';
import { Link } from 'react-router';

// Import Style
import './Header.css';

//Import Images
import titleimage from './sittingtitle.png';
import leftdrawericon from './leftdrawericon.png';

class Header extends Component {
  render() {
    return (
      <div className="header">

        <div className="leftdrawericon">
          <img src={leftdrawericon} width="24px" height="16px" alt="drawer" />
        </div>
        <div className="content">
            <img src={titleimage} alt="Sitting" />
        </div>
        <div className="rightdrawericon">

        </div>
      </div>
    )
  }
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

export default Header;
