import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            task: ''
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitTask = e => {
        e.preventDefault()
        this.setState({task: '' })
        this.props.addTask(e, this.state.task)
    }

    render() {
        return(
            <form onSubmit={this.submitTask}>
                <input type='text' name='task' value={this.state.task} onChange={this.handleChange}/>
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm