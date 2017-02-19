import React from 'react';
import Menu from 'components/Menu';
import style from './style';

const App = ({ children }) => (
  <div style={style.main}>
    <Menu />
    {children}
  </div>
);

export default App;
