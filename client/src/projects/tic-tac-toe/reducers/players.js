import { CHANGE_PLAYER } from '../actions'

const defaultState = [
  {
    // [0]
    icon: 'X',
    human: true,
  },
  {
    // [1]
    icon: 'O',
    human: true,
  },
]

export const currentPlayer = (state = defaultState[0], action = {}) => {
  switch (action.type) {
    case CHANGE_PLAYER:
      return action.payload
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
