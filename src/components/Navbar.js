import React from 'react';
import * as FaIcons from "react-icons/fa";

function navbar() {
  return (
    <div>
      <div className="navbar">
        <Link to='#' className="menu-bars">
          <FaIcons.FaBars/>
        </Link>
      </div>
    </div>
  );
}

export default navbar;
