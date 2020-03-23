import React, { useContext } from 'react';
import { DataContext } from "./DataContext";
import Todo from "./Todo";

function TodoList() {
    const [list, setList] = useContext(DataContext);
    return (
        <div className="TodoList">
            {
                list.map(item => (
                    <Todo key={item.id} task={item.task} completed={item.completed} id={item.id} />
                ))
            }
        </div>
    )
}

export default TodoList;
