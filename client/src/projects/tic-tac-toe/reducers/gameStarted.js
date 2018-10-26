import { GAME_STARTED, RESET_GAME, PLAY_MOVE } from '../actions'

export default (state = false, action = {}) => {
  switch (action.type) {
    case GAME_STARTED:
      return action.payload
    case RESET_GAME:
      return false
    case PLAY_MOVE:
      return true
    default:
      return state
  }
}
