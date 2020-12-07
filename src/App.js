import React, { useCallback, useState } from 'react';
import NewsList from './component/chap12/NewsList';
import Categories from './component/chap12/Categories';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);
  return (
    <>
      <Categories category={category} onSelect={onSelect}/>
      <NewsList category={category}/>
    </>
  );
};

export default App;