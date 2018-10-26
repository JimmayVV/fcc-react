import { combineReducers } from 'redux'
import board from './board'
import { players, currentPlayer } from './players'
import gameOver from './gameOver'
import gameStarted from './gameStarted'

export default combineReducers({
  board,
  players,
  currentPlayer,
  gameOver,
  gameStarted,
})
