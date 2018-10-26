import React from 'react'

class Modal extends React.Component {
  static Header = props => <div className="ticTacToe-modal-header">{props.children}</div>
  static Content = props => <div className="ticTacToe-modal-content">{props.children}</div>
  static Footer = props => <div className="ticTacToe-modal-footer">{props.children}</div>

  render() {
    const { toggleVar, children } = this.props

    return (
      <div className={`ticTacToe-modal-container ${toggleVar ? '' : 'ticTacToe-modal-container__closed'}`}>
        <div className="ticTacToe-modal">{children}</div>
      </div>
    )
  }
}

export default Modal
