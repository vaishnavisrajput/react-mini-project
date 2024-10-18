import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");



  const handleUpdate = (id, text) => {
    setEditId(id);
    setEditText(text);
  };
  const handleSave = (id) => {
    dispatch(updateTodo({id, text: editText}));
    setEditId(null);
    setEditText("");
  }

  return (
    <div className="container">
      <div>
        <h2>Your tasks goes here:</h2>
      </div>
      <div className="to-do-items">
        {todos.map((todo) => (
          <li key={todo.id}>
            {editId === todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              todo.text
            )}
            {editId === todo.id ? (
              <button className="save-btn" onClick={() => handleSave(todo.id)}>
                Save
              </button>
            ) : (
              <button
                className="dlt-btn"
                onClick={() => handleUpdate(todo.id, todo.text)}
              >
                Update
              </button>
            )}

            <button
              className="dlt-btn"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Todos;
