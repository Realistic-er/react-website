import React from 'react';
import Routes from './router/index';
import stytle from './App.module.scss'
function App() {
  return (
    <div className={stytle.app}>
      <Routes></Routes>
    </div>
  );
}

export default App;
