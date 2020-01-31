import React from "react";

class Form extends React.Component {
  nameRef = React.createRef();
  stuIdRef = React.createRef();
  externalCourseRef = React.createRef();
  internalCourseRef = React.createRef();
  commentRef = React.createRef();

  createCourse = (event) => {
    event.preventDefault();
    const entry = {
      nameRef: this.nameRef.current.value,
      stuIdRef: parseInt(this.stuIdRef.current.value),
      externalCourseRef: this.externalCourseRef.current.value,
      internalCourseRef: this.internalCourseRef.current.value,
      commentRef: this.commentRef.current.value,
      dateRef: (new Date()).toString(),
    };
    this.props.addEntry(entry);
    console.log(entry);
    
    
    // refresh form
    event.currentTarget.reset();
  }

  render() {
    return (
      <form className="form" onSubmit={this.createCourse}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input name="stuId" ref={this.stuIdRef} type="text" placeholder="Student ID" />
        <input name="externalCourse" ref={this.externalCourseRef} type="text" placeholder="External Course" />
        <input name="internalCourse" ref={this.internalCourseRef} type="text" placeholder="Internal Course" />
        <textarea name="comment" ref={this.commentRef} placeholder="Comment"></textarea>
        <button type="submit">+ Add Course</button>
      </form>
    )
  }
}

export default Form;
