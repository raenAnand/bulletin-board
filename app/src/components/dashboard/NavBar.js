import React, { Component } from 'react';

import placeholder from '../../../public/images/placeholder.png';

class NavBar extends Component {

  render() {
    return (
      <div className="navbar-wrapper clearfix">
        <div className="left-content">
          <span className="dashboard-text">Bulletin Dashboard</span>
        </div>
        <div className="right-content">
          <div className="image-wrapper">
            <img src={placeholder} alt="placeholder image"/>        
          </div>
        </div>
      </div>
    );
  }

}

export default NavBar;
