import React from 'react';
import { render } from '@testing-library/react';
import { TestComponentPlatform, TestComponentThrottle } from './TestComponent';

describe('esm module test', () => {
  describe('platform', () => {
    it('renders without crashing', () => {
      expect(render.bind(render, <TestComponentPlatform />))
        .not
        .toThrow();
    });
  });

  describe('throttle', () => {
    it('renders without crashing', () => {
      expect(render.bind(render, <TestComponentThrottle />))
        .not
        .toThrow();
    });
  });
});
