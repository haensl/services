export const className = (states, basename, separator = '--') =>
  `${basename} ${
    Object.keys(states)
    .filter((state) => states[state])
    .map((state) => `${basename}${separator}${state}`)
    .join(' ')
  }`.trim();

export const setInputValue = (input, value) => {
  Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')
    .set
    .call(input, value);
  input.dispatchEvent(new Event('input', { bubbles: true }));
};

export default {
  className,
  setInputValue
};
