import React from "react";
import { render, cleanup } from "@testing-library/react";
import axiosMock from "axios";

import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

jest.mock("axios");

afterEach(() => {
  cleanup();
});

// @ts-ignore
axiosMock.get.mockResolvedValue({
  data: [],
});

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

describe("App", () => {
  it("renders title", () => {
    const { getByText } = render(app);

    expect(getByText("Issue Board")).toBeInTheDocument();
  });

  it("renders select", () => {
    const { queryAllByText } = render(app);

    const elements = queryAllByText("Assignee");
    // 2 = 1 for Select + 1 for column name from Table
    expect(elements).toHaveLength(2);
    expect(elements[0] instanceof HTMLLabelElement).toBe(true);
  });

  it("renders table", () => {
    const { queryByText } = render(app);

    expect(queryByText("ID")).toBeInTheDocument();
  });
});
