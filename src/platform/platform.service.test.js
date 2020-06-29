import platform from './';

describe('platform service', () => {
  describe('hasWindow', () => {
    describe('when there is a global window object', () => {
      it('is true', () => {
        expect(platform.hasWindow)
          .toBe(true);
      });
    });

    describe('when there is no global window object', () => {
      let windowSpy;

      beforeAll(() => {
        windowSpy = jest.spyOn(global, 'window', 'get')
          .mockReturnValue(undefined);
        jest.resetModules();
      });

      afterAll(() => {
        windowSpy.mockRestore();
      });

      it('is false', () => {
        expect(require('./').hasWindow)
          .toBe(false);
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

    describe('when there is no global document object', () => {
      let documentSpy;

      beforeAll(() => {
        documentSpy = jest.spyOn(global, 'document', 'get')
          .mockReturnValue(undefined);
        jest.resetModules();
      });

      afterAll(() => {
        documentSpy.mockRestore();
      });

      it('is false', () => {
        expect(require('./').hasDocument)
          .toBe(false);
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

    describe('when there is no window', () => {
      let windowSpy;

      beforeAll(() => {
        windowSpy = jest.spyOn(global, 'window', 'get')
          .mockReturnValue(undefined);
        jest.resetModules();
      });

      afterAll(() => {
        windowSpy.mockRestore();
      });

      it('is false', () => {
        expect(require('./').hasSessionStorage)
          .toBe(false);
      });
    });

    describe('when there is no sessionStorage object on window', () => {
      let sessionStorageSpy;

      beforeAll(() => {
        sessionStorageSpy = jest.spyOn(window, 'sessionStorage', 'get')
          .mockReturnValue(undefined);
        jest.resetModules();
      });

      afterAll(() => {
        sessionStorageSpy.mockRestore();
      });

      it('is false', () => {
        expect(require('./').hasSessionStorage)
          .toBe(false);
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

    describe('when there is no window', () => {
      let windowSpy;

      beforeAll(() => {
        windowSpy = jest.spyOn(global, 'window', 'get')
          .mockReturnValue(undefined);
        jest.resetModules();
      });

      afterAll(() => {
        windowSpy.mockRestore();
      });

      it('is false', () => {
        expect(require('./').hasLocalStorage)
          .toBe(false);
      });
    });

    describe('when there is no localStorage object on window', () => {
      let localStorageSpy;

      beforeAll(() => {
        localStorageSpy = jest.spyOn(window, 'localStorage', 'get')
          .mockReturnValue(undefined);
        jest.resetModules();
      });

      afterAll(() => {
        localStorageSpy.mockRestore();
      });

      it('is false', () => {
        expect(require('./').hasLocalStorage)
          .toBe(false);
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

    describe('when there is no document', () => {
      let documentSpy;

      beforeAll(() => {
        documentSpy = jest.spyOn(global, 'document', 'get')
          .mockReturnValue(undefined);
        jest.resetModules();
      });

      afterAll(() => {
        documentSpy.mockRestore();
      });

      it('is false', () => {
        expect(require('./').hasDocumentElement)
          .toBe(false);
      });
    });

    describe('when there is no documentElement on document', () => {
      let documentElementSpy;

      beforeAll(() => {
        documentElementSpy = jest.spyOn(document, 'documentElement', 'get')
          .mockReturnValue(undefined);
        jest.resetModules();
      });

      afterAll(() => {
        documentElementSpy.mockRestore();
      });

      it('is false', () => {
        expect(require('./').hasDocumentElement)
          .toBe(false);
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

    describe('when there is no window and no document', () => {
      let windowSpy;
      let documentSpy;

      beforeAll(() => {
        windowSpy = jest.spyOn(global, 'window', 'get')
          .mockReturnValue(undefined);
        documentSpy = jest.spyOn(global, 'document', 'get')
          .mockReturnValue(undefined);
        jest.resetModules();
      });

      afterAll(() => {
        windowSpy.mockRestore();
        documentSpy.mockRestore();
      });

      it('returns null', () => {
        expect(require('./').scrollPosition())
          .toBeNull();
      });
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

        describe('when there is no document', () => {
          let documentSpy;

          beforeAll(() => {
            documentSpy = jest.spyOn(global, 'document', 'get')
              .mockReturnValue(undefined);
            jest.resetModules();
          });

          afterAll(() => {
            documentSpy.mockRestore();
          });

          it('returns null', () => {
            expect(require('./').scrollPosition())
              .toBeNull();
          });
        });
      });
    });

    describe('when there is no window', () => {
      let windowSpy;

      beforeAll(() => {
        windowSpy = jest.spyOn(global, 'window', 'get')
          .mockReturnValue(undefined);
        jest.resetModules();
      });

      afterAll(() => {
        windowSpy.mockRestore();
      });

      describe('when there is a document', () => {
        describe('with scrollLeft and scrollTop', () => {
          beforeEach(() => {
            document.documentElement.scrollLeft = 5;
            document.documentElement.scrollTop = 15;
          });

          it('returns the scroll position', () => {
            expect(require('./').scrollPosition())
              .toEqual(
                expect.objectContaining({
                  x: 5,
                  y: 15
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
            expect(require('./').scrollPosition())
              .toBeNull();
          });
        });
      });

      describe('when there is no document', () => {
        let documentSpy;

        beforeAll(() => {
          documentSpy = jest.spyOn(global, 'document', 'get')
            .mockReturnValue(undefined);
          jest.resetModules();
        });

        afterAll(() => {
          documentSpy.mockRestore();
        });

        it('returns null', () => {
          expect(require('./').scrollPosition())
            .toBeNull();
        });
      });
    });
  });
});
