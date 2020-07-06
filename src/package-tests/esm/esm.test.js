import React from 'react';
import { render } from '@testing-library/react';
import { TestComponentComponent, TestComponentPlatform, TestComponentThrottle } from './TestComponent';

describe('esm module test', () => {
  describe('component', () => {
    it('renders without crashing', () => {
      expect(render.bind(render, <TestComponentComponent />))
        .not
        .toThrow();
    });
  });

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
