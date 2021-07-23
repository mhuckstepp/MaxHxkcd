import React from "react";
import "@testing-library/jest-dom/extend-expect";
import "jest-canvas-mock";
import { render, act } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import { mockInitialState } from "./mockStoreData";
// Configure Mock Store with no middleware
const middlewares = [];
const mockStore = configureMockStore(middlewares);

// Set Initial State for Mock Store
const store = mockStore(() => mockInitialState);

function Wrapper(props) {
  return (
    <Provider store={store}>
      <MemoryRouter>
      {props.children}
      </MemoryRouter>
    </Provider>
  );
}
const wrapRender = async (component, options) => {
 return render(component, { wrapper: Wrapper, ...options });
};

jest.mock("react-router-dom", () => ({
  useLocation: () => jest.fn(),
}));

export * from "@testing-library/react";

export { wrapRender as render };
