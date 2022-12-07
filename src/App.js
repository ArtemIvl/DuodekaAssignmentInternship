import './App.css';
import React, {useState, useEffect, useCallback} from 'react';
import Store from './Store';
import TodoList from './components/TodoList';

function App() {
  return (
    <Store>
    <div className="todo-app">
      <TodoList />
    </div>
    </Store>
  );
}

export default App;

