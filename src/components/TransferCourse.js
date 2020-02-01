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
        <p>Date Entered: {dateRef}</p>
        <p>Student Name: {nameRef}</p>
        <p>Student ID: {stuIdRef}</p>
        <p>External Course: {externalCourseRef}</p>
        <p>Internal Course: {internalCourseRef}</p>
        <p>Comment: {commentRef}</p>
        <button onClick={() => this.props.deleteEntry(this.props.index)}>Delete</button>
      </li>
    )
  }
}

export default TransferCourse;
