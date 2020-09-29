import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from "./components/TodoList";

const todoList = [
  {
    task: 'Finish todays project',
    id: 45676453,
    completed: false
  },
  {
    task: 'Start a Coup',
    id: 65483698,
    completed: true
  },
]

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todoList: todoList
    }
  }

  addTask = ( e, task ) => {
    e.preventDefault()
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todoList: [...this.state.todoList, newTask]
    })
  }

  toggleComplete = (taskId) => {
    console.log(taskId)
    this.setState({
      todoList: this.state.todoList.map((task) => {
        if (taskId === task.id){
          return({
            ...task,
            completed: !task.completed
          })
        }
        return (task)
      })
    })
  }

  clearComplete = e => {
    this.setState({
      todoList: this.state.todoList.filter((task) => !task.completed)
    })
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h1>Todo List</h1>
          <TodoForm addTask={this.addTask}/>
        </div>
        <div>
          <TodoList 
            todoList={this.state.todoList}
            toggleComplete={this.toggleComplete}
            clearComplete={this.clearComplete}
          />
        </div>
      </div>
    );
  }
}

export default App;
