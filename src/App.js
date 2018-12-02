import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route , Switch} from "react-router-dom";
import Counter from "./Components/counter/counter";
import Nav from "./Components/layout/Nav";
import Home from "./Components/layout/Home";
import TodoList from './Components/TodoList/TodoList';
import Courses from './Components/CrudApp/courses';
import ColorPage from './Components/colorUi/ColorPage';
import Search from './Components/search/SearchItems';
import Weather from './Components/Weather/Weather';



class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Counter" component={Counter} />
              <Route path='/TodoList' component={TodoList}/>
              <Route path='/Courses' component={Courses}/>
              <Route path='/Color' component={ColorPage}/>
              <Route path='/Search' component={Search}/>
              <Route path='/Weather' component={Weather}/>
            </Switch>
          </div>
        </BrowserRouter>
       
      </div>
    );
  }
}

export default App;
