import React from 'react';
import services from '@haensl/services';

const App = () => {
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

export default App;
