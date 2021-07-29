import React from "react";
// import { render, cleanup, screen, fireEvent } from "./utils/test-utils";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import App from "./App.js";
import configureMockStore from "redux-mock-store";
import { mockInitialState } from "./utils/mockStoreData";
// Configure Mock Store with no middleware
const middlewares = [];
const mockStore = configureMockStore(middlewares);

// Set Initial State for Mock Store
const store = mockStore(() => mockInitialState);

jest.mock("react-router-dom", () => ({
  useLocation: () => jest.fn(),
}));

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe("<App />", () => {
  test("Component renders", () => {
    render(
      // <MemoryRouter initialEntries={["/"]}>
      <Provider store={store}>
        <App />
      </Provider>
      // </MemoryRouter>
    );
    screen.debug();
  });
});
