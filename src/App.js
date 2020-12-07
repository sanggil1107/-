import React, { useCallback, useRef, useState } from 'react';
import TodoInsert from './component/chap10/TodoInsert';
import TodoTemplate from './component/chap10/TodoTemplate';
import TodoList from './component/chap10/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들기',
      checked: false,
    },
  ]);

  const nexId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nexId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nexId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo,
        )
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
};

export default App;
