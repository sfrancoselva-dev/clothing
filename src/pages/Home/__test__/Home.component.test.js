import { render, screen } from "@testing-library/react";
import Home from "../Home.component";

test("Home component should render as expected", () => {
  render(<Home />);

  const hatsCollection = screen.getByText(/hats/i);
  expect(hatsCollection).toBeInTheDocument();
  const sneakersCollection = screen.getByText(/sneakers/i);
  expect(sneakersCollection).toBeInTheDocument();
});
