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
      <p>Name:
        <input
          type="text"
          name="nameRef"
          onChange={this.handleChange}
          defaultValue={this.props.entry.nameRef} 
        />
      </p>
      <p> ID Number:
        <input
          type="text"
          name="stuIdRef"
          onChange={this.handleChange}
          defaultValue={this.props.entry.stuIdRef} 
        />
      </p>
      <p>External Course:
        <input
          type="text"
          name="externalCourseRef"
          onChange={this.handleChange}
          defaultValue={this.props.entry.externalCourseRef} 
        />
      </p>
      <p>Internal Course:
        <input
          type="text"
          name="internalCourseRef"
          onChange={this.handleChange}
          defaultValue={this.props.entry.internalCourseRef} 
        />
      </p>
      <p>Comment:
        <input
          type="text"
          name="commentRef"
          onChange={this.handleChange}
          defaultValue={this.props.entry.commentRef} 
        />
      </p>
    </div>
    )
  }
}

export default EditCourseForm;
