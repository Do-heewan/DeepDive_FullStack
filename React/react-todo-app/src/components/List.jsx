import { useState } from "react";

export default function List({title, completed, id, todoData, setTodoData}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);
    
    const btnStyle = {
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
    }

    const getStyle = (completed) => {
        return {
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: completed ? 'line-through' : 'none'
        }
    }

    const handleCompleteChange = (id) => {
        let newTodoData = todoData.map((data) => {
        if (data.id === id) {
            data.completed = !data.completed;
        }
        return data;
        })

        setTodoData(newTodoData);
        localStorage.setItem('todoData', JSON.stringify(newTodoData));
    }

    const handleClick = (id) => {
        console.log(id);
        let newTodoData = todoData.filter((data) => data.id !== id);
        console.log(newTodoData);
        setTodoData(newTodoData);

        window.localStorage.setItem('todoData', JSON.stringify(newTodoData));
    }

    const handleEditChange = (e) => {
        setEditedTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodoData = todoData.map((data) => {
            if (data.id === id) {
                data.title = editedTitle
            }

            return data;
        })

        setTodoData(newTodoData);
        localStorage.setItem('todoData', JSON.stringify(newTodoData));
        setIsEditing(false);
    }

    if (isEditing) {
        return (
            <form style={getStyle(completed)} onSubmit={handleSubmit}>
                <input 
                    value={editedTitle}
                    autoFocus
                    onChange={handleEditChange}
                />
                <button type='button' style={btnStyle} onClick={() => setIsEditing(false)}>x</button>
                <button type='submit' style={btnStyle}>Save</button>
            </form>
        )
    }
    else {
        return (
        <div style={getStyle(completed)}>
            <input type='checkbox' 
                onChange={() => handleCompleteChange(id)} 
                checked={completed}/>
            {title}
            <button style={btnStyle} onClick={() => handleClick(id)}>x</button>
            <button style={btnStyle} onClick={() => setIsEditing(true)}>Edit</button>
        </div>
    )}
}