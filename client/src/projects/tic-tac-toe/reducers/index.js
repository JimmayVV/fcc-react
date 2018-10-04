import { combineReducers } from 'redux'
import board from './board'
import { players, currentPlayer } from './players'

export default combineReducers({
  board,
  players,
  currentPlayer,
})
