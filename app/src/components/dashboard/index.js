import React, { Component } from 'react';

import NavBar from './NavBar';
import SideMenu from './SideMenu';

class Dashboard extends Component {

  render () {
    return (
      <div>
        <NavBar></NavBar>
        <div className="clearfix">
          <div className="left-content sidemenu-wrapper">
            <SideMenu></SideMenu>
          </div>
          <div className="right-content main-container-wrapper">
          
          </div>
        </div>
      </div>
    );
  }

}

export default Dashboard;
