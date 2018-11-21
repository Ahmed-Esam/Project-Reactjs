import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  state = {
    users: [],
    search: "",
  };

  upDateSearch = e => {
    this.setState({
      search: e.target.value
    });
  };

  componentDidMount = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      console.log(res.data);
      this.setState({
        users: res.data
      });
    });
  };

  render() {
    let item = this.state.users.filter(user => {
      return (
        user.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
    });

    return (
      <div>
        <h2>Item In Api JSONPlaceholder</h2>
        {item.map(user => (
          <div key={user.id}>{user.name}</div>
        ))}
        <input
          onChange={this.upDateSearch}
          type="text"
          placeholder="search......"
          value={this.state.search}
          className='p-1 rounded border-0'
        />
      </div>
    );
  }
}

export default Search;
