import React from 'react';
import './App.css';
import {DataProvider} from "./components/DataContext" 
import TodoList from './components/TodoList';

function App() {
  return (
    <DataProvider>
    <div className="App">
      <TodoList/>
    </div>
    </DataProvider>
  );
}

export default App;
