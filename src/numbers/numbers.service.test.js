import { rand, randInt } from './';

describe('numbers service', () => {
  let n;

  describe('rand', () => {
    it('returns a random number between 0 and 1', () => {
      n = rand();
      expect(n)
        .toBeGreaterThanOrEqual(0);
      expect(n)
        .toBeLessThanOrEqual(1);
    });

    it('returns a number between set min and max', () => {
      n = rand({
        min: 2,
        max: 3
      });

      expect(n)
        .toBeGreaterThanOrEqual(2);
      expect(n)
        .toBeLessThanOrEqual(3);
    });
  });

  describe('randInt', () => {
    it('returns a random integer between min and max', () => {
      n = randInt({
        min: 1,
        max: 3
      });
      expect([1, 2, 3])
        .toContainEqual(n);
    });
  });
});
