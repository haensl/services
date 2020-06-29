import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('esm module test', () => {
  it('renders without crashing', () => {
    expect(render.bind(render, <App />))
      .not
      .toThrow();
  });
});
