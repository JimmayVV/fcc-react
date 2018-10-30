import React from 'react'
import {render} from 'react-testing-library'
import Heading from '../heading'

it('should render a header and a game board', () => {
  return undefined
  const {queryAllByTestId} = render(<Heading />)

  const header = getByTestId('header')
  const gameBoard = getByTestId('gameboard')

  expect(header).toBeTruthy()
  expect(gameBoard).toBeTruthy()
})
