import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../styles/navBar.css'

const NavBar = ({ links }) => (
  <nav className="nav-bar">
    <ul className="nav-bar__container">
      <li className="nav-bar__header">
        <Link to="/">NavBar</Link>
      </li>
      {links.map(link => (
        <li className="nav-bar__link" key={`nav-bar__link${link.href}`}>
          <Link to={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  </nav>
)

NavBar.defaultProps = {
  links: [],
}

NavBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      label: PropTypes.string,
    })
  ),
}

export default NavBar
