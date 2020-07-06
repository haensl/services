export const className = (states, basename, separator = '--') =>
  `${basename} ${
    Object.keys(states)
    .filter((state) => states[state])
    .map((state) => `${basename}${separator}${state}`)
    .join(' ')
  }`.trim();

export default {
  className
};
