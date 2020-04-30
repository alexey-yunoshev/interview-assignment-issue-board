import React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";

// TODO
test.skip("renders title", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Issue Board/i);
  expect(linkElement).toBeInTheDocument();
});
