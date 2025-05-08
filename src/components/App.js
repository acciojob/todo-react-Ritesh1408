
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [value, setValue] = useState('');
    const [todos, setTodos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim() === '') return;
        setTodos([...todos, { text: value, completed: false }]);
        setValue('');
    }

    const handleDelete = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

  return (
    <div>
        {/* Do not remove the main div */}
        <div style={{ width: "600px" }}>
            <h1 style={{ textAlign: "center" }}>
                To-Do List
            </h1>
            <form
                className="todo-form"
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <input
                    type="text"
                    placeholder="Add a new task"
                    value={value}
                    onChange={handleChange}
                    style={{
                        width: '300px',
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        marginRight: '10px'
                    }}
                />
                <button
                    type="submit"
                    className="add-button"
                    style={{
                        padding: '10px 20px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        color: '#000',
                        cursor: 'pointer'
                    }}
                >
                    Add Todo
                </button>
            </form>

            {todos.map((todo, index) => (
                <ul
                    key={index}
                    className="todo-list"
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: '20px'
                    }}
                >
                    <li
                        className="todo-item"
                        style={{ listStyleType: 'none' }}
                    >
                        {todo.text}
                    </li>
                    <button
                        className="delete-button"
                        onClick={() => handleDelete(index)}
                        style={{
                            padding: '10px 20px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            color: '#000',
                            cursor: 'pointer'
                        }}
                    >
                        Delete
                    </button>
                </ul>
            ))}
        </div>
    </div>
  )
}

export default App
