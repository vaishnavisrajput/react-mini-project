import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import { addTodo} from '../features/todoSlice';
function AddTodos() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch()

    const handleAdd = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput(""); 
    }
  return (
    <div className='container '>
    
        <form className='form'>
        <div className="header">
            <h1>To-Do List</h1>
        </div>
            <input type="text" 
            placeholder='Enter a Todo' 
            value={input}
            onChange={(e) => setInput(e.target.value)} />
            <br />
            <button className='btn' onClick={handleAdd} >Add ToDo</button>
        </form>
    </div>
  )
}

export default AddTodos