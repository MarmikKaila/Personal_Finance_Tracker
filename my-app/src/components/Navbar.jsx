import React from 'react'

const Navbar = ({ currentPage }) => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">GreenLine Finance</div>
        {currentPage === 'home' && (
          <nav>
            <ul className="nav-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Invest</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Navbar
