import React from 'react';
import { render } from '@testing-library/react';
import TestComponent from './TestComponent';

describe('esm module test', () => {
  it('renders without crashing', () => {
    expect(render.bind(render, <TestComponent/>))
      .not
      .toThrow();
  });
});
