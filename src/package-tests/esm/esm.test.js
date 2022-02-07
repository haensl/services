/* eslint-disable object-curly-newline */
import React from 'react';
import { render } from '@testing-library/react';
import {
  TestComponentComponent,
  TestComponentPlatform,
  TestComponentThrottle
} from './TestComponent';
/* eslint-enable object-curly-newline */

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

  describe('numbers', () => {
    it('renders without crashing', () => {
      expect(render.bind(render, <TestComponentNumbers />))
        .not
        .toThrow();
    });
  });
});
