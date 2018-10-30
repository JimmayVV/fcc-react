import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import {queryAllByTestId, queryByTestId} from 'dom-testing-library'
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
  const {getByTestId} = renderWithProviders(<GameBoard />)
  const gameBoard = getByTestId('gameboard')
  const cells = queryAllByTestId(gameBoard, 'cell')
  expect(cells.length).toBe(9)
})

it("should render a user's click", () => {
  const {getByTestId} = renderWithProviders(<GameBoard />)
  const gameBoard = getByTestId('gameboard')
  const cells = queryAllByTestId(gameBoard, 'cell')
  let cellContent = queryByTestId(cells[0], 'cell-content').firstChild
  expect(cellContent).toBeNull()
  fireEvent.click(cells[0])
  expect(queryByTestId(cells[0], 'cell-content').firstChild).not.toBeNull()
})
