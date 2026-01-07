import React from 'react';
import { Link } from 'react-router-dom'; //use link to switch betwene pages without reloading
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar-container ${isOpen ? 'show-sidebar' : ''}`}>
      <ul className="sidebar-links">
        {/* Link back to Home */}
        <li>
          <Link to="/" onClick={toggleSidebar} className='shiny-gold'>Home</Link>
        </li>

        {/* The New Separate Pages */}
        <li>
          <Link to="/fleet" onClick={toggleSidebar} className='shiny-gold'>The Fleet</Link>
        </li>
        <li>
          <Link to="/checkin" onClick={toggleSidebar} className='shiny-gold'>Placeholder</Link>
        </li>
        <li>
          <Link to="/story" onClick={toggleSidebar} className='shiny-gold'>Placeholder</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;