export const hasWindow = (() => {
  try {
    return typeof window === 'object';
  } catch(err) {
    return false;
  }
})();

export const hasDocument = (() => {
  try {
    return typeof document === 'object';
  } catch(err) {
    return false;
  }
})();

export const hasDocumentElement = hasDocument
  && typeof document.documentElement === 'object';

export const hasSessionStorage = hasWindow
  && typeof window.sessionStorage === 'object';

export const hasLocalStorage = hasWindow
  && typeof window.localStorage === 'object';

export const scrollPosition = () => {
  if (hasWindow
    && typeof window.scrollX === 'number'
    && !Number.isNaN(window.scrollX)) {
    return {
      x: window.scrollX,
      y: window.scrollY
    };
  } else if (hasDocumentElement
    && typeof document.documentElement.scrollLeft === 'number'
    && !Number.isNaN(document.documentElement.scrollLeft)) {
    return {
      x: document.documentElement.scrollLeft,
      y: document.documentElement.scrollTop
    };
  }

  return null;
};

export default {
  hasDocument,
  hasDocumentElement,
  hasLocalStorage,
  hasSessionStorage,
  hasWindow,
  scrollPosition
};
