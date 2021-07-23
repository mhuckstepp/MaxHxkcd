import React from "react";
import { render, cleanup, screen } from "./utils/test-utils";
import App from "./App";

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe("<App />", () => {
  test("Component renders", async () => {
    render(<App />);
    screen.debug();
  });
});
