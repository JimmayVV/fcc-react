import React from 'react'
import {createStore} from 'redux'
import {connect, Provider} from 'react-redux'
import reducer from '../reducers'
import {render} from 'react-testing-library'
import NakedCell from '../cell'

const Cell = connect(state => ({board: state.board}))(props => (
  <NakedCell applyClick={() => {}} pos={0} board={props.board} />
))

it('renders', () => {
  const store = createStore(reducer)
  const {getByTestId} = render(
    <Provider store={store}>
      <Cell />
    </Provider>,
  )
  expect(getByTestId('cell')).toBeTruthy()
  expect(getByTestId('cell-content')).toBeTruthy()
})
