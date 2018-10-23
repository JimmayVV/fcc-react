import React from "react";
import { render } from "react-testing-library";
import Cell from "../cell";
import GameBoard from "../gameBoard";

// Redux
import store from "../stores/gameStore";
import { Provider } from "react-redux";

function renderWithProviders(ui, options) {
  return render(<Provider store={store}>{ui}</Provider>, options);
}

it("should have 9 cells", () => {
  const { container } = renderWithProviders(<GameBoard />);
  expect(container.firstChild).toMatchSnapshot();
});
