import React, { useState, useContext } from 'react';
import DataContext from "./DataContext";

function AddTodo() {
    const [list, setList] = useContext(DataContext);
    const [task, setTask] = useState("");

    const handleChange = e => {
        setTask(e.target.value);
    }

    const addTask = e => {
        e.preventDefault();
        setList([...list, { task: task, completed: false, id: Math.random() }]);
        setTask("");
    }

    return (
        <div className="addTodo">
            <form onSubmit={addTask}>
                <input type="text" placeholder="Add a task" name="task" value={task} onChange={handleChange} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddTodo;
