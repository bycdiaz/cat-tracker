import React from "react";
import Popup from "reactjs-popup";

class AddCourseForm extends React.Component {
  nameRef = React.createRef();
  stuIdRef = React.createRef();
  externalCourseRef = React.createRef();
  internalCourseRef = React.createRef();
  commentRef = React.createRef();
  dateRef = React.createRef();

  createCourse = (event, close) => {
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
    event.currentTarget.reset();
    close();
  }

  render() {
    return (
      <Popup trigger={<button> Add New Transfer Course</button>} position="bottom center">
          {close => (
            <form className="form" onSubmit={(e)=>this.createCourse(e,close)} autoComplete="off">
              <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
              <input name="stuId" ref={this.stuIdRef} type="text" placeholder="Student ID" />
              <input name="externalCourse" ref={this.externalCourseRef} type="text" placeholder="External Course" />
              <input name="internalCourse" ref={this.internalCourseRef} type="text" placeholder="Internal Course" />
              <textarea name="comment" ref={this.commentRef} placeholder="Comment"></textarea>
              <button type="submit">+ Add Course</button>
            </form>
          )}
      </Popup>
    )
  }
}

export default AddCourseForm;
