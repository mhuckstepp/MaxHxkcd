import React, { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-canvas-mock';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { mockInitialState } from './mockStoreData';
// Configure Mock Store with no middleware
const middlewares = [];
const mockStore = configureMockStore(middlewares);

// Set Initial State for Mock Store
const store = mockStore(() => mockInitialState);

const addProviders: FC =  ({ children }) => {
    return (
      <Provider store={store}>
          {children}
      </Provider>
    )
  }

  const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>
  ) => render(ui, { wrapper: addProviders, ...options })

jest.mock("react-router-dom", () => ({
  useLocation: () => jest.fn(),
  }));

export * from '@testing-library/react';

// Override render with our custom render built above
export { customRender as render };
