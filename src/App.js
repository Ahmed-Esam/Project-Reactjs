import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Counter from "./Components/counter";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
class App extends Component {
 


  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Nav />
            <Route exact path="/" component={Home} />
            <Route exact path="/Counter" component={Counter} />
            {/* <Route path='/From' component={Form}/> */}
          </div>
        </BrowserRouter>
       
      </div>
    );
  }
}

export default App;
