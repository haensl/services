import { className, setInputValue } from './';

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

  describe('setInputValue()', () => {
    let onChange;
    let input;

    beforeEach(() => {
      onChange = jest.fn();
      input = document.createElement('input');
      input.addEventListener('input', onChange);
      setInputValue(input, 'test');
    });

    it('sets the input\'s value', () => {
      expect(input.value)
        .toEqual('test');
    });

    it('triggers an input event', () => {
      expect(onChange)
        .toHaveBeenCalled();
    });
  });
});
