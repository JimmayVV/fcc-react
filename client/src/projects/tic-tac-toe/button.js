import React from 'react'

const Button = props => {
  const { children, ...rest } = props

  // const className = 'ticTacToe-button'
  const className = props.buttonstyle ? `ticTacToe-button-${props.buttonStyle}` : 'ticTacToe-button-primary'

  return (
    <button type="button" className={`ticTacToe-button ${className}`} {...rest}>
      <div className="ticTacToe-button-highlight" />
      {children}
    </button>
  )
}

export default Button
