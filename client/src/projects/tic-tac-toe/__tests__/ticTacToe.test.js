import React from 'react'
import { shallow } from 'enzyme'
import TicTacToe, { Heading } from '../index'
import GameBoard from '../gameBoard'

it('should have 1 heading and 1 game board', () => {
  const wrapper = shallow(<TicTacToe />)

  expect(wrapper.find(Heading).length).toEqual(1)
})