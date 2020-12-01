import React, { useState } from 'react';
import TodoInsert from './component/chap10/TodoInsert';
import TodoTemplate from './component/chap10/TodoTemplate';

const App = () => {
  return (
    <TodoTemplate>
      <TodoInsert/>
    </TodoTemplate>
  );
};

export default App;
