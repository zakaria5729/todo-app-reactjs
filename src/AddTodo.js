import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    
    if(this.state.content !== '') {
      this.props.insertTodo(this.state)

      this.setState({
        content: ''
      })
    }
  }

  render() {
    return (
        <React.Fragment>
          <form onSubmit={this.handleSubmit}>
            <label> Add new todo: </label>
            <input type="text" onChange={this.handleChange} value={this.state.content} />
          </form>
        </React.Fragment>
    )
  }
}

export default AddTodo