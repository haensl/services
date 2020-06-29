const services = require('@haensl/services');

describe('cjs module test', () => {
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
});

