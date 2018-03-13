import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class SideMenu extends Component {

  render() {
    return (
      <div>
        <h3>Bulletin Dashboard</h3>
        <ul>
          <li>
            <NavLink
              className="clearfix"
              activeClassName="activeNav active"
              to="/dashboard/list"
            >
              <span>List</span>
              <FontAwesome
                className="super-crazy-colors"
                name="list"
                size="1x"
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              />
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }

}

export default SideMenu;
