import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';

const Sidebar = () => (
  <div className="sidebar-header">
      <NavLink to="/" exact={true} className="sidebar-header__title">
        <h1>Roy Cathey</h1>
      </NavLink>
  </div>
);

export default Sidebar;