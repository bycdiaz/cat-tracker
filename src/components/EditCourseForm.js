import React from "react";

class EditCourseForm extends React.Component {
  handleChange = (event) => {    
    console.log(event.currentTarget.name);
    
    const updatedCourse = {
      ...this.props.entry,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    this.props.editEntry(this.props.index, updatedCourse);
  }
  render() {
    return (
      <div className="course-edit">
        <p>Click anywhere outside of the form done editing.</p>
      <input
        type="text"
        name="nameRef"
        onChange={this.handleChange}
        defaultValue={this.props.entry.nameRef} 
      />
      <input
        type="text"
        name="stuIdRef"
        onChange={this.handleChange}
        defaultValue={this.props.entry.stuIdRef} 
      />
      <input
        type="text"
        name="commentRef"
        onChange={this.handleChange}
        defaultValue={this.props.entry.commentRef} 
      />
      <input
        type="text"
        name="externalCourseRef"
        onChange={this.handleChange}
        defaultValue={this.props.entry.externalCourseRef} 
      />
      <input
        type="text"
        name="internalCourseRef"
        onChange={this.handleChange}
        defaultValue={this.props.entry.internalCourseRef} 
      />
    </div>
    )
  }
}

export default EditCourseForm;
