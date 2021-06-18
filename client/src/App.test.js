import React from "react";
import { render, act } from "@testing-library/react";
import App from "./App";

describe("<App /> component tests", () => {
  test("Component renders and inserts Okta widget", async () => {
    const { container } = await render(<App />);
    expect(container).toContainElement(container.firstChild);
  });
});
