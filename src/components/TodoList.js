import React, {useState, useEffect, useCallback, useContext} from 'react'
import './TodoList.css'
import TodoEl from './TodoEl';
import TodoForm from './TodoForm';
import { Context } from '../Store';

function TodoList() {
    const [state, setState] = useContext(Context);
    const [todos, setTodos] = useState(state.todos);
  
    const addTodo = todo => {
      if (!todo.text || /^\s*$/.test(todo.text)) {
        return;
      }
  
      const newTodos = [todo, ...todos];
  
      setTodos(newTodos);
      setState(state.todos = todos);
      console.log(...todos);
    };
  
    const updateTodo = (todoId, newValue) => {
      if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
      }
  
      setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
      setState(state.todos = todos);
    };
  
    const removeTodo = id => {
      const removedArr = [...todos].filter(todo => todo.id !== id);
  
      setTodos(removedArr);
      setState(state.todos = todos);
    };
  
    const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      });
      setTodos(updatedTodos);
      setState(state.todos = todos);
    };
  
    return (
      <>
        <h1 className='header'>What do you need to do?</h1>
        <TodoForm onSubmit={addTodo} />
        <TodoEl
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </>
    );
  }
  
  export default TodoList;