import React from 'react'
import TodoEl from './TodoEl';

function AllTodos({todos}) {

  return (
    <ul>
        {todos.map(item => <TodoEl key={item.id} {...item} />)}
    </ul>
  )
}

export default AllTodos;