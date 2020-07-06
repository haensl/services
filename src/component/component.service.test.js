import { className } from './';

describe('component service', () => {
  const base = 'MyComponent';

  describe('className()', () => {
    let cn;

    describe('empty states', () => {
      beforeEach(() => {
        cn = className({}, base);
      });

      it('returns the base name', () => {
        expect(cn)
          .toEqual(base);
      });
    });

    describe('with states', () => {
      beforeEach(() => {
        cn = className({
          doingStuff: true,
          notHappening: false
        }, base);
      });

      it('contains the base', () => {
        expect(cn)
          .toMatch(/MyComponent /);
      });

      it('contains the doingStuff state', () => {
        expect(cn)
          .toMatch(/ MyComponent--doingStuff/);
      });

      it('does not contain the notHappening state', () => {
        expect(cn)
          .not
          .toMatch(/MyComponent--notHappening/);
      });

      describe('with separator', () => {
        beforeEach(() => {
          cn = className({
            doingStuff: true,
            notHappening: false
          }, base, '.');
        });

        it('contains the base', () => {
          expect(cn)
            .toMatch(/MyComponent /);
        });

        it('contains the doingStuff state', () => {
          expect(cn)
            .toMatch(/ MyComponent\.doingStuff/);
        });

        it('does not contain the notHappening state', () => {
          expect(cn)
            .not
            .toMatch(/MyComponent\.notHappening/);
        });
      });
    });
  });
});
