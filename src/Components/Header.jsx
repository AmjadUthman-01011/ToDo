import React from 'react';
import '../Style/Header.css'; 

function Header() {
  return (
    <div className="header">
      <div className='logo'>ToDo List</div>
      <nav className='navbar'>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Profile</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
