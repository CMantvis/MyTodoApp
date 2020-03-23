import React,{useContext} from 'react';
import { DataContext } from "./DataContext";

function Todo({task,completed,id}) {

    const completedStyle = {
        color: "red",
        textDecoration: "line-through"
    }

    const [list,setList] = useContext(DataContext)

    const handleDelete = id => {
        setList([...list.filter(item => item.id !== id)])
    }

    const handleComplete = id => {
        setList([...list.map(item => {
            if (item.id === id) {
                item.completed = !item.completed
            }
            return item
        })])
    }

    return (
        <div className="todo">
            <input type="checkbox" onClick={() => handleComplete(id)}/>
            <h3 style={completed?completedStyle:null}>{task}</h3>
            <button onClick={() =>handleDelete(id)} >X</button>
        </div>
    )
}

export default Todo;
