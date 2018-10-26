import React from 'react'
import { connect } from 'react-redux'
import Modal from './modal'
import Button from './button'

import { resetBoard, changePlayer, gameStarted as startGame, resetGame, TIE_GAME } from './actions'

const Heading = props => {
  const { gameOver, gameStarted } = props
  const winnerMessage = gameOver === TIE_GAME ? `${TIE_GAME} game!` : gameOver ? `${gameOver} wins!` : null

  return (
    <>
      <header className={`${gameOver || !gameStarted ? 'modal-open' : ''}`}>
        <h1 className={`ticTacToe-header ${gameOver ? 'modal-open' : ''}`}>Tic Tac Toe!</h1>
        <h3>Player 1: {JSON.stringify(props.players[0])}</h3>
        <h3>Player 2: {JSON.stringify(props.players[1])}</h3>
      </header>

      <Modal toggleVar={!gameStarted}>
        <Modal.Header>Test!</Modal.Header>
        <Modal.Content>Test Content!</Modal.Content>
        <Modal.Footer>
          <Button
            onClick={() => {
              props.startGame(true)
            }}
          >
            Start Game!
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal toggleVar={gameOver}>
        <Modal.Header>Game Over!</Modal.Header>
        <Modal.Content>{winnerMessage}</Modal.Content>
        <Modal.Footer>
          <Button
            onClick={() => {
              props.resetBoard()
              props.changePlayer(props.players[0]) // Reset player back to player 1, in case player 2 is currently active
            }}
          >
            Play Again
          </Button>
          <Button
            buttonstyle="danger"
            onClick={() => {
              props.resetGame()
            }}
          >
            Reset Settings
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default connect(
  state => ({
    players: state.players,
    gameOver: state.gameOver,
    gameStarted: state.gameStarted,
  }), // MapStateToProps
  { resetBoard, changePlayer, startGame, resetGame } // MapDispatchToProps
)(Heading)
