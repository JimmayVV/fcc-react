import { PLAY_MOVE, RESET_GAME, RESET_BOARD } from '../actions'

const initialState = [null, null, null, null, null, null, null, null, null]

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case PLAY_MOVE: {
      const { pos, player } = action.payload

      return state.map((elem, index) => {
        // If the index matches the position we're setting, and that element is null, then set it to the player
        if (index === pos && elem === null) return player
        // If the cell was occupied already, or not the cell we were aiming for, then just return whatever the grid previously had
        return elem
      })
    }
    case RESET_BOARD:
    case RESET_GAME:
      return initialState
    default:
      return [...state]
  }
}
