import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import configureMockStore from "redux-mock-store";
import { mockInitialState } from "./mockStoreData";
// Configure Mock Store with no middleware
const middlewares = [];
const mockStore = configureMockStore(middlewares);

// Set Initial State for Mock Store
const store = mockStore(() => mockInitialState);

const AllTheProviders = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

jest.mock("react-router-dom", () => ({
  useLocation: () => jest.fn(),
}));

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
