import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class SideMenu extends Component {

  render() {
    return (
      <div>
        <h3>Bulletin Dashboard</h3>
        <ul>
          <li>
            <a href="#" className="clearfix">
              <span>Add</span>
              <FontAwesome
                className="super-crazy-colors"
                name="plus-square"
                size="2x"
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              />
            </a>
          </li>
          <li>
            <a href="#" className="clearfix">
              <span>List</span>
              <FontAwesome
                className="super-crazy-colors"
                name="list-alt"
                size="2x"
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              />
            </a>
          </li>
        </ul>
      </div>
    );
  }

}

export default SideMenu;
