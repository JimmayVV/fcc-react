import React from 'react'
import {render} from 'react-testing-library'
import TicTacToe from '../index'

it('should render a header and a game board', () => {
  const {getByTestId} = render(<TicTacToe />)

  const header = getByTestId('header')
  const gameBoard = getByTestId('gameboard')

  expect(header).toBeTruthy()
  expect(gameBoard).toBeTruthy()
})
