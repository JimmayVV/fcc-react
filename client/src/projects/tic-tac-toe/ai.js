export const winner = board => {
  // Horizontal rows
  if (board[0][0] === board[0][1] && board[0][1] === board[0][2]) return board[0][0]
  if (board[1][0] === board[1][1] && board[1][1] === board[1][2]) return board[1][0]
  if (board[2][0] === board[2][1] && board[2][1] === board[2][2]) return board[2][0]
  // Diagonals
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) return board[0][0]
  if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) return board[2][0]
  // Columns
  if (board[0][0] === board[1][0] && board[1][0] === board[2][0]) return board[0][0]
  if (board[0][1] === board[1][1] && board[1][1] === board[2][1]) return board[0][1]
  if (board[0][2] === board[1][2] && board[1][2] === board[2][2]) return board[0][2]

  // Default return
  return null
}

export const gameover = board => {
  if (winner(board) !== null) return true

  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[i].lenth; ++j) {
      if (board[i][j] === null) return false
    }
  }

  return true
}

export const minimax = (board, depth, cpu) => 1
