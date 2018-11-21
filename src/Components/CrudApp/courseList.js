import React, { Component  , Fragment} from 'react'

class CourseList extends Component {


    state = {
        isEdit : false
    }

    renderCourse = () => {
        return (
            <li className='list-unstyled'>
                <span className='col-8 text-secondary'> {this.props.courses.name} </span>
                <button className='btn btn-primary col-2 m-1' onClick={ () => {this.toggleState()}} > Edit </button>
                <button className='btn btn-warning col-2 m-1' onClick={ () => { this.props.delete(this.props.index)}}> Delete </button>
            </li>  
        )
    }

    toggleState = () => {
        let {isEdit} = this.state;
        this.setState( {
            isEdit : !isEdit
        })
    }

    upDateForm = (e) => {
        e.preventDefault();
        this.props.editCourse(this.props.index , this.input.value);
        this.toggleState();
    }

    renderForm = () => {
        return (
            <form onSubmit={this.upDateForm}>
                <input type='text' ref={(v) => {this.input = v}} defaultValue={this.props.courses.name}/>
                <button className='btn btn-secondary'> Update </button>
            </form>
        )
    }


    render() { 
        let {isEdit} = this.state;
        return ( 
            <Fragment>
                { isEdit ? this.renderForm() :   this.renderCourse()}
            </Fragment>
         );
    }
}
 
export default CourseList;