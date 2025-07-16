/** @jest-environment jsdom */

import platform from './';

describe.skip('platform service', () => {
  describe('hasWindow', () => {
    describe('when there is a global window object', () => {
      it('is true', () => {
        expect(platform.hasWindow)
          .toBe(true);
      });
    });
  });

  describe('hasDocument', () => {
    describe('when there is a global document object', () => {
      it('is true', () => {
        expect(platform.hasDocument)
          .toBe(true);
      });
    });
  });

  describe('hasSessionStorage', () => {
    describe('when there is a sessionStorage object on window', () => {
      it('is true', () => {
        expect(platform.hasSessionStorage)
          .toBe(true);
      });
    });
  });

  describe('hasLocalStorage', () => {
    describe('when there is a localStorage object on window', () => {
      it('is true', () => {
        expect(platform.hasLocalStorage)
          .toBe(true);
      });
    });
  });

  describe('hasDocumentElement', () => {
    describe('when there is a document with documentElement', () => {
      it('is true', () => {
        expect(platform.hasDocumentElement)
          .toBe(true);
      });
    });
  });

  describe('scrollPosition()', () => {
    let reset;
    let initialState;

    beforeAll(() => {
      initialState = {
        document: {
          scrollLeft: document
            .documentElement
            .scrollLeft,
          scrollTop: document
            .documentElement
            .scrollTop
        },
        window: {
          scrollX: window.scrollX,
          scrollY: window.scrollY
        }
      };

      reset = () => {
        if (window) {
          window.scrollX = initialState
            .window
            .scrollX;

          window.scrollY = initialState
            .window
            .scrollY;
        }

        if (document && document.documentElement) {
          document.documentElement.scrollLeft = initialState
            .document
            .scrollLeft;
          document.documentElement.scrollTop = initialState
            .document
            .scrollTop;
        }
      };
    });

    afterEach(() => {
      reset();
    });

    describe('when there is a window', () => {
      describe('with scrollX and scrollY', () => {
        beforeEach(() => {
          window.scrollX = 10;
          window.scrollY = 50;
        });

        it('returns the scroll position', () => {
          expect(platform.scrollPosition())
            .toEqual(
              expect.objectContaining({
                x: 10,
                y: 50
              })
            );
        });
      });

      describe('without scrollX and scrollY', () => {
        beforeEach(() => {
          window.scrollX = undefined;
          window.scrollY = undefined;
        });

        describe('when there is a document', () => {
          describe('with scrollLeft and scrollTop', () => {
            beforeEach(() => {
              document.documentElement.scrollLeft = 20;
              document.documentElement.scrollTop = 100;
            });

            it('returns the scrollPosition', () => {
              expect(platform.scrollPosition())
              .toEqual(
                expect.objectContaining({
                  x: 20,
                  y: 100
                })
              );
            });
          });

          describe('without scrollLeft and scrollTop', () => {
            let leftSpy;
            let topSpy;

            beforeAll(() => {
              leftSpy = jest.spyOn(document.documentElement, 'scrollLeft', 'get')
                .mockReturnValue(undefined);
              topSpy = jest.spyOn(document.documentElement, 'scrollTop', 'get')
                .mockReturnValue(undefined);
            });

            afterAll(() => {
              leftSpy.mockRestore();
              topSpy.mockRestore();
            });

            it('returns null', () => {
              expect(platform.scrollPosition())
                .toBeNull();
            });
          });
        });
      });
    });
  });
});
