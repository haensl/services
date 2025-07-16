/** @jest-environment node */

import platform from './';

describe.skip('platform service', () => {
  describe('hasWindow', () => {
    describe('when there is no global window object', () => {
      it('is false', () => {
        expect(platform.hasWindow)
          .toBe(false);
      });
    });
  });

  describe('hasDocument', () => {
    describe('when there is no global document object', () => {
      it('is false', () => {
        expect(platform.hasDocument)
          .toBe(false);
      });
    });
  });

  describe('hasSessionStorage', () => {
    describe('when there is no window', () => {
      it('is false', () => {
        expect(platform.hasSessionStorage)
          .toBe(false);
      });
    });
  });

  describe('hasLocalStorage', () => {
    describe('when there is no window', () => {
      it('is false', () => {
        expect(platform.hasLocalStorage)
          .toBe(false);
      });
    });
  });

  describe('hasDocumentElement', () => {
    describe('when there is no documentElement on document', () => {
      it('is false', () => {
        expect(platform.hasDocumentElement)
          .toBe(false);
      });
    });
  });

  describe('scrollPosition()', () => {
    describe('when there is no window and no document', () => {
      it('returns null', () => {
        expect(platform.scrollPosition())
          .toBeNull();
      });
    });
  });
});
