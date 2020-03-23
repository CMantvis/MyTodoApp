import React from 'react';
import './App.css';
import { DataProvider } from "./components/DataContext"
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <AddTodo />
        <TodoList />
      </div>
    </DataProvider>
  );
}

export default App;
