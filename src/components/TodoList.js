import React from 'react'
import Todo from "./Todo";

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = (props) => {
    console.log(props.todoList)
    return(<div>
        <div className='shopping-list'>
            {props.todoList.map(task => (
                <Todo key={task.id} task={task} toggleComplete={props.toggleComplete}/>
            ))}
        </div>
        <button className="clear-btn" onClick={props.clearComplete}>Clear Completed</button>
    </div>)
}

export default TodoList