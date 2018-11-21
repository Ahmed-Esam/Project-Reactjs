import React, { Component } from "react";
import CourseForm from "./courseForm";
import CourseList from "./courseList";

class Courses extends Component {
  state = {
    courses : [
      {name:'Html'},
      {name:'Css'},
      {name:'JQ'},
      {name:'Reactjs'},
    ],
    current:''
  };

  handleChange = e => {
    this.setState({
      current : e.target.value
    })
  };

  addCourses = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({name: current});
    this.setState({
      courses,
      current: ''
    })
  }

  delete = (index) => {
    let courses = this.state.courses;
    courses.splice(index,1);
    this.setState({
      courses
    })
  }


  editCourse = (index , value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.setState({
      courses
    })
  }

  render() {
    let courses = this.state.courses;
    let coursesList = courses.map((course , index) => {
      return <CourseList courses={course}  key={index} index={index}  delete={this.delete} editCourse={this.editCourse}/>
    } )
    return (
      <div className='text-nowrap'>
        <CourseForm addCourses={this.addCourses} handleChange={this.handleChange} current={this.state.current} />
        <ul className='mx-auto col-3 text-right bg-light p-3'>
            {coursesList}
        </ul>
      </div>
    );
  }
}

export default Courses;
