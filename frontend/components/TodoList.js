import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  state = {
    showAll: true
  }

  toggleShowAll = evt => {
    this.setState({
      ...this.state,
      showAll: !this.state.showAll,
    })
  }
  render() {
    const { todos, toggleCompleted } = this.props
    const filtered = todos.filter(td => !td.completed || this.state.showAll)
    return (
      <div>
        {
          filtered.map((todo) => (<Todo key={todo.id} todo={todo} toggleCompleted={toggleCompleted} />))
        }
        <button onClick={this.toggleShowAll}>{this.state.showAll ? 'Hide Completed' : 'Show All'} </button>
      </div>
    )
  }
}
