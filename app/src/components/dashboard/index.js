import React, { Component } from 'react';

import NavBar from './NavBar';
import SideMenu from './SideMenu';
import AddEntry from '../addEntry';

class Dashboard extends Component {

  render () {
    return (
      <div>
        <div className="clearfix">
          <div className="left-content sidemenu-wrapper">
            <SideMenu></SideMenu>
          </div>
          <div className="left-content main-container-wrapper">
            <NavBar></NavBar>
            <div className="container">
              <AddEntry></AddEntry>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Dashboard;
