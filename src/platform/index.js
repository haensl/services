export const hasWindow = (() => {
  try {
    return typeof window === 'object' && window !== null;
  } catch {
    return false;
  }
})();

export const hasDocument = (() => {
  try {
    return typeof document === 'object' && document !== null;
  } catch {
    return false;
  }
})();

export const hasDocumentElement = hasDocument
  && typeof document.documentElement === 'object'
  && document.documentElement !== null;

export const hasSessionStorage = hasWindow
  && typeof window.sessionStorage === 'object'
  && window.sessionStorage !== null
  && typeof window.sessionStorage.setItem === 'function'
  && typeof window.sessionStorage.getItem === 'function';

export const hasLocalStorage = hasWindow
  && typeof window.localStorage === 'object'
  && window.localStorage !== null
  && typeof window.localStorage.setItem === 'function'
  && typeof window.localStorage.getItem === 'function';

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
