// Sidebar.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <ul>
        <li><Router to="/">Home</Router></li>
        <li><Router to="/about">About</Router></li>
        <li><Router to="/contact">Contact</Router></li>
      </ul>
    </div>
  );
};

export default Sidebar;