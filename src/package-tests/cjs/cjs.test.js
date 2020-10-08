const services = require('@haensl/services');

describe('cjs module test', () => {
  describe('component', () => {
    describe('className', () => {
      it('is a function', () => {
        expect(typeof services.component.className)
          .toEqual('function');
      });
    });

    describe('setInputValue', () => {
      it('is a funciton', () => {
        expect(typeof services.component.setInputValue)
          .toEqual('function');
      });
    });
  });

  describe('platform', () => {
    describe('hasDocument', () => {
      it ('is a boolean', () => {
        expect(typeof services.platform.hasDocument)
          .toEqual('boolean');
      });
    });

    describe('hasDocumentElement', () => {
      it('is a boolean', () => {
        expect(typeof services.platform.hasDocumentElement)
          .toEqual('boolean');
      });
    });

    describe('hasLocalStorage', () => {
      it('is a boolean', () => {
        expect(typeof services.platform.hasLocalStorage)
          .toEqual('boolean');
      });
    });

    describe('hasSessionStorage', () => {
      it('is a boolean', () => {
        expect(typeof services.platform.hasSessionStorage)
          .toEqual('boolean');
      });
    });

    describe('hasWindow', () => {
      it('is a boolean', () => {
        expect(typeof services.platform.hasWindow)
          .toEqual('boolean');
      });
    });

    describe('scrollPosition', () => {
      it('is a function', () => {
        expect(typeof services.platform.scrollPosition)
          .toEqual('function');
      });

      it('does not throw', () => {
        expect(services.platform.scrollPosition)
          .not
          .toThrow();
      });
    });
  });

  describe('throttle', () => {
    describe('debounce', () => {
      it('is a function', () => {
        expect(typeof services.throttle.debounce)
          .toEqual('function');
      });

      it('does not throw', () => {
        expect(services.throttle.debounce.bind(null, () => {}, 50))
          .not
          .toThrow();
      })
    });
  });
});

