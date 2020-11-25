import React, { useState } from 'react';

const Sample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' }
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = e => setInputText(e.target.value);
  const onClick = (text) => {
    alert('dd')
    const nextNames = [
      ...names,
      {
        id: nextId,
        text: inputText
      }
    ];

    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  };

  const onRemove = id => {
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  };
  const onTest = () => {
    alert('d')
  }

  const nameList = names.map(name => (
    <li key={name.i} onClick={() => onRemove(name.id)}>{name.text}</li>
  ));
  return (
    <> 
      <input value={inputText} onChange={onChange}/>
      <button onClick={onClick}>추가</button>
      <button onClick={() => onTest}>테스트</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default Sample;