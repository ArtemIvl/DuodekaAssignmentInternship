import React, {useState, useEffect, useCallback} from 'react'
import AllTodos from './AllTodos';
import App from '../App';
import './TodoList.css'

const TodoList = () => {

const { count } = useGlobalState();
const [title, setTitle] = useState([]);
var id = 0;

const addTodo = () => {

    // if (title || /^\s*$/.test(title))
    // {
    //     return;
    // }

    GlobalState.set({
        count: count + 1
    });
    setTitle(''); 
}

const deleteTodo = id => {
   // const removeArray = [...todos].filter(todo => todo.id !== id)
   // setTodos(removeArray);
}

const editTodo = (id, updatedValue) => {
    if (!updatedValue.text || /^\s*$/.test(updatedValue.text))
    {
        return;
    }

    //setTodos(prev => prev.map(item => (item.id === id ? updatedValue : item)));
}

  return (
    <div className='todo-list'>
        <div className='header'>TodoApp</div>
        <input
        type='text'
        value={title}
        onChange={event => setTitle(event.target.value)}
        />
        <button onClick={() => addTodo()}>
            Add Todo
        </button>
        <h1>{count}</h1>
    </div>
  )
}

export default TodoList;