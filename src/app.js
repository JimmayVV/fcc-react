import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/navBar'
import './styles/app.css'

import TicTacToe from './projects/tic-tac-toe'

const links = [{ href: '/tic-tac-toe', label: 'Tic-Tac-Toe', component: TicTacToe }]

const Index = () => (
  <div className="page__main">
    Select an app from the menu above! (We will eventually render a display of the apps here)
  </div>
)

const App = () => (
  <Router>
    <>
      <NavBar links={links} />
      <div className="page">
        <Route exact path="/" component={Index} />
        {links.map(link => (
          <Route key={`route${link.href}`} path={link.href} component={link.component} />
        ))}
      </div>
    </>
  </Router>
)

export default App
