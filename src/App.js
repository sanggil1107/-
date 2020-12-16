// import React, { useCallback, useState } from 'react';
// import NewsPage from './component/chap12/NewsPage';
// import { Route } from 'react-router-dom';

// const App = () => {
 
//   return (
//     <Route path="/:category?" component={NewsPage} />
//   );
// };

// export default App;

// import React from 'react';
// import ColorBox from './component/chap13/ColorBox';
// import { ColorProvider } from './component/chap13/Color';
// import SelectColors from './component/chap13/SelectColors';

// const App = () => {
//   return (
//     <ColorProvider>
//       <div>
//         <SelectColors/>
//         <ColorBox/>
//       </div>
//     </ColorProvider>
//   );
// };

// export default App;

import React from 'react';
import CounterContainer from './component/chap14/containers/CounterContainer';
import TodosContainer from './component/chap14/containers/TodosContainer';

const App = () => {
  return (
    <div>
      <CounterContainer/>
      <hr/>
      <TodosContainer/>
    </div>
  );
};

export default App;