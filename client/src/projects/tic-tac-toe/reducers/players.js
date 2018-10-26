import { CHANGE_PLAYER, RESET_GAME } from '../actions'

const defaultState = [
  {
    // [0]
    icon: 'X',
    human: true,
  },
  {
    // [1]
    icon: 'O',
    human: false,
  },
]

export const currentPlayer = (state = defaultState[0], action = {}) => {
  switch (action.type) {
    case CHANGE_PLAYER:
      return action.payload
    case RESET_GAME:
      return defaultState[0]
    default:
      return state
  }
}

export const players = (state = defaultState, action = {}) => {
  switch (action.type) {
    default:
      return state
  }
}
