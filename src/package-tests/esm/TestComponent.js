import React from 'react';
import services from '@haensl/services';

export const TestComponentPlatform = () => {
  const scrollPosition = services.platform.scrollPosition();

  if (scrollPosition) {
    return (
      <div>{ scrollPosition.x },{ scrollPosition.y }</div>
    );
  }

  return (
    <div>no scroll position</div>
  );
};

export const TestComponentThrottle = () => {
  const handler = services.throttle.debounce(
    () => {
      console.log('test');
    },
    50
  );

  return (
    <button onClick={ handler }>test</button>
  );
};

export const TestComponentComponent = () => {
  const cn = services.component.className({
    doingStuff: true,
    notHappening: false
  }, 'TestComponentComponent', '.');

  return (
    <div className={ cn }>Test</div>
  );
};

export const TestComponentNumbers = () => {
  const n = services.numbers.randInt(0,500);

  return (
    <span>{ n }</span>
  );
};

export default {
  TestComponentComponent,
  TestComponentNumbers,
  TestComponentPlatform,
  TestComponentThrottle
};
