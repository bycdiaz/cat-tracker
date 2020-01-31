import React from "react";

class TransferCourse extends React.Component {
  render() {
    const { 
      commentRef,
      dateRef,
      externalCourseRef,
      internalCourseRef,
      nameRef,
      stuIdRef,
     } = this.props.details;

    return (
      <li className="course-entry">
        <p>{dateRef}</p>
        <p>{nameRef}</p>
        <p>{stuIdRef}</p>
        <p>{externalCourseRef}</p>
        <p>{internalCourseRef}</p>
        <p>{commentRef}</p>
      </li>
    )
  }
}

export default TransferCourse;
