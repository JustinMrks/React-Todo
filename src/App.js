import React from 'react';
import TodoForm from './components/TodoForm'

const todoList = [
  {
    task: 'test1',
    id: 45676453,
    completed: false
  },
  {
    task: 'test2',
    id: 65483698,
    completed: false
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
      todoList: [...todoList, newTask]
    })
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoForm addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;
