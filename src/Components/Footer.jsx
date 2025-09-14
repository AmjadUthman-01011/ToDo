import React from 'react'
import '../Style/Footer.css'

function Footer() {
  return (
      <footer className="footer">
        <p>© 2024 ToDo App. All rights reserved.</p>
        <div className="footer-links">
          <a href="#!" className="footer-link">Privacy Policy</a>
          <a href="#!" className="footer-link">Terms of Service</a>
          <a href="#!" className="footer-link">Contact Us</a>
        </div>
      </footer>
  )
}

export default Footer