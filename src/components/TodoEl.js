import React, {useState} from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import './TodoEl.css';
import TodoList from './TodoList';

function TodoEl({title, id, completed}) {

const [edit, setEdit] = useState({
    id: null,
    text: ''
});

const deleteTodo = id =>
{
   // const removeArray = [...todos].filter(todo => todo.id !== id);
   // setTodos(removeArray);
}

const [check, setCheck] = useState(completed);

  return (
  <div>
    <li>
        <label>
            <input
            type = "checkbox"
            checked={check}
            onChange={() => setCheck(!check)} />
            <span>{title}</span>
        </label>
        <EditIcon />
        <DeleteForeverIcon onClick={item => deleteTodo(item.id)}/>
    </li>
  </div>
  )
}

export default TodoEl;