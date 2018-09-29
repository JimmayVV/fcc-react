import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../styles/navBar.css'

class NavBar extends React.Component {
  state = { name: null }

  static defaultProps = {
    links: [],
  }

  static propTypes = {
    links: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string,
        label: PropTypes.string,
      })
    ),
  }

  async componentDidMount() {
    const response = await fetch('/api/getUsername')
    const name = await response.json()
    if (name) this.setState({ name: name.username })
  }

  render() {
    const { name } = this.state
    const { links } = this.props
    return (
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
          <li>{name ? `Welcome ${name}` : 'Loading Name...'}</li>
        </ul>
      </nav>
    )
  }
}

export default NavBar
