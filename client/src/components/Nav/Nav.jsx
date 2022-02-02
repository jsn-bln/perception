import React from 'react';
import {Link} from 'react-router-dom'
import "../Nav/nav.css"

const Nav = () => {
  return (
  <nav className="nav-bar">
        <div className="nav-title">Perception</div>
        <ul className="nav-links">
          <li><Link className="nav-link" to="#">Home</Link></li>
          <li><Link className="nav-link" to="#">About</Link></li>
          <li><Link className="nav-link" to="#">Portfolio</Link></li>
          <li><Link className="nav-link" to="#">Contact</Link></li>
        </ul>
          <div>
            Search bar
          </div>
    </nav>
  )
  
}
export default Nav;
