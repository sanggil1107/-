import React, { useState } from 'react';
import TodoInsert from './component/chap10/TodoInsert';
import TodoTemplate from './component/chap10/TodoTemplate';
import TodoList from './component/chap10/TodoList';

const App = () => {
  return (
    <TodoTemplate>
      <TodoInsert/>
      <TodoList/>
    </TodoTemplate>
  );
};

export default App;
