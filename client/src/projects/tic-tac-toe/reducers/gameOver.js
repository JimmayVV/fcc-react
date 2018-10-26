import { GAME_OVER, RESET_BOARD, RESET_GAME } from '../actions'

export default (state = false, action = {}) => {
  switch (action.type) {
    case GAME_OVER:
      return action.payload
    case RESET_BOARD:
    case RESET_GAME:
      return false
    default:
      return state
  }
}
