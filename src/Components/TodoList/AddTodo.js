import React, { Component } from "react";

class AddTodo extends Component {
  state = { name: "", age: "" };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state)
    this.setState({
      name:'',
      age: ''
    })
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <div className="row justify-content-center">
              <div className=" m-2">
                <input
                  onChange={this.handleChange}
                  type="text"
                  className="form-control"
                  id="name"
                  value={this.state.name}
                />
              </div>
              <div className=" m-2">
                <input
                  type="Number"
                  onChange={this.handleChange}
                  className="form-control"
                  id="age"
                  value={this.state.age}
                />
              </div>
              <input type='submit' className="btn btn-danger" value='Add Itme'/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddTodo;
