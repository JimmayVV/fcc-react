import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import GameBoard from '../gameBoard'

// Redux
import store from '../stores/gameStore'
import {Provider} from 'react-redux'

function renderWithProviders(ui, options) {
  return render(<Provider store={store}>{ui}</Provider>, options)
}

it('should render', () => {
  const {getByTestId} = renderWithProviders(<GameBoard />)
  const gameBoard = getByTestId('gameboard')
  expect(gameBoard).toBeTruthy()
})

it('should have 9 cell children', () => {
  const {getByTestId, queryAllByTestId} = renderWithProviders(<GameBoard />)
  const gameBoard = getByTestId('gameboard')
  const cells = queryAllByTestId('cell')
  expect(cells.length).toBe(9)
})

it("should render a user's click", () => {
  const gameBoard = renderWithProviders(<GameBoard />)
  const cells = gameBoard.queryAllByTestId('cell')
  expect(cells[0].textContent).toBe('')
  fireEvent.click(cells[0])
  expect(cells[0].textContent).toBe('X')
})
