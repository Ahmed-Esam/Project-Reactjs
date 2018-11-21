import React from 'react';

const FromTodo = (props) => {
    const { content } = props;
    const TodoList = content.map(contents => {
      return (
        <div key={Math.random() * 100}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-2 m-2">
                <span className="form-control ">{contents.name}</span>
              </div>
              <div className="col-2 m-2">
                <span className="form-control  ">{contents.age}</span>
              </div>
              <div className="col-1 m-2">
                <span className="form-control btn btn-warning">
                  {contents.id}
                </span>
              </div>
            </div>
          </div>
        </div>
      )
    })
    return ( 
        <div>
            {TodoList}
        </div>
     );
}
 
export default FromTodo;