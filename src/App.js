import React from 'react';
import './App.css';
import Parent from './Parent'
import ValueContext from './ValueContext';

function App() {
  let value=React.useState(30);
  return (
    <ValueContext.Provider value={value}>
    <div className="App-header">
      Hello World
    <br/>
    <Parent/>
    </div>
    </ValueContext.Provider>
  );
}

export default App;
