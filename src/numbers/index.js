export const rand = ({
  min = 0,
  max = 1
} = {}) => Math.random() * (max - min) + min;

export const randInt = ({
  min,
  max
}) =>  Math.floor(Math.random() * (max + 1 - min) + min);

export default {
  rand,
  randInt
};
