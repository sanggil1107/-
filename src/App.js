import React, { useCallback, useState } from 'react';
import NewsPage from './component/chap12/NewsPage';
import { Route } from 'react-router-dom';

const App = () => {
 
  return (
    <Route path="/:category?" component={NewsPage} />
  );
};

export default App;