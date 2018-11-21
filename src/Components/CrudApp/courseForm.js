import React from "react";

const CourseForm = props => {
  
  return (
    <div>
      <form className="m-3" onSubmit={props.addCourses}>
        <input type="text" className="btn" onChange={props.handleChange} value={props.current}/>
        <input type="submit" value="Add Courses" className="btn btn-danger" />
      </form>
    </div>
  );
};

export default CourseForm;
