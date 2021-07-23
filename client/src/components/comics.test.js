import React from "react";
// import { render } from "@testing-library/react";
import { render, cleanup, screen } from "../utils/test-utils";
import Comics from "./Comics";

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe("<Comics />", () => {
  test("Component renders", async () => {
    render(<Comics />);
    screen.debug()
  });
});
