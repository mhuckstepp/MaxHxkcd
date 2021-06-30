import React from "react";
import { render, cleanup } from "./utils/test-utils";
import App from "./App";

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe("<App /> component tests", () => {
  test("App renders and contains elements", async () => {
    const { container } = await render(<App />);
    expect(container).toContainElement(container.firstChild);
  });
});
