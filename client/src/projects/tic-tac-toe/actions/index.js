export const PLAY_MOVE = 'play_move'
export const CHANGE_PLAYER = 'change_player'

export const playMove = (row, col, player) => ({
  type: PLAY_MOVE,
  payload: { row, col, player },
})

export const changePlayer = newPlayer => ({
  type: CHANGE_PLAYER,
  payload: newPlayer,
})
