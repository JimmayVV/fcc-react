export const PLAY_MOVE = 'play_move'
export const CHANGE_PLAYER = 'change_player'
export const RESET_BOARD = 'reset_board'
export const RESET_GAME = 'reset_game'
export const GAME_OVER = 'game_over'
export const TIE_GAME = 'Tie'
export const GAME_STARTED = 'start game'

export const playMove = (pos, player) => ({
  type: PLAY_MOVE,
  payload: { pos, player },
})

export const changePlayer = newPlayer => ({
  type: CHANGE_PLAYER,
  payload: newPlayer,
})

export const resetBoard = () => ({
  type: RESET_BOARD,
})

export const endGame = winner => ({
  type: GAME_OVER,
  payload: winner,
})

export const gameStarted = started => ({
  type: GAME_STARTED,
  payload: started,
})

export const resetGame = () => ({
  type: RESET_GAME,
})
