import React from "react";
import { render } from "react-testing-library";
import TicTacToe, { Heading } from "../index";
import GameBoard from "../gameBoard";

it("should have 1 heading and 1 game board", () => {
  const { container } = render(<TicTacToe />);
  expect(container.firstChild).toMatchSnapshot();
});
