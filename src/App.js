import React from 'react';
import MyComponent from './component/chap3/MyComponent';
import Say from './component/chap3/Say';

const App = () => {
  return (
    <div>
      <MyComponent name="react" num={3}>리액트</MyComponent>
      <Say/>
    </div>
  );
};

export default App;
