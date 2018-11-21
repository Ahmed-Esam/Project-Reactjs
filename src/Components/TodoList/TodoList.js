import React, { Component } from "react";
import AddTodo from "./AddTodo";
import FromTodo from './FromTodoList'
class TodoList extends Component {
  state = {
    content: [
      { id: 1, name: "ahmed", age: 26 },
      { id: 2, name: "Ali", age: 23 },
      { id: 2, name: "Osama", age: 22 }
    ]
  };

  addTodo = (Todo) => {
    Todo.id =  Math.floor((Math.random() * 10));
    let { content } = this.state;
    content.push(Todo);
    this.setState({ content  });
  };

  
  render() {
 
    return (
      <div>
        <FromTodo content={this.state.content}/>
        <AddTodo addTodo={this.addTodo} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default TodoList;
