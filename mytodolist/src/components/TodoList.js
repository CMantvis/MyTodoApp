import React,{useContext} from 'react'
import {DataContext} from "./DataContext"
function TodoList() {
    const value = useContext(DataContext)
    return (
        <div>
            {value}
        </div>
    )
}

export default TodoList
