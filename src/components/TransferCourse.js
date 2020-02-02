import React from "react";
import Popup from "reactjs-popup";
import EditCourseForm from "./EditCourseForm.js";

class TransferCourse extends React.Component {
  render() {
    const { 
      commentRef,
      dateRef,
      externalCourseRef,
      internalCourseRef,
      nameRef,
      stuIdRef,
     } = this.props.entry;

    return (
      <li className="course-entry">
        <p>Date Entered: {dateRef}</p>
        <p>Student Name: {nameRef}</p>
        <p>Student ID: {stuIdRef}</p>
        <p>External Course: {externalCourseRef}</p>
        <p>Internal Course: {internalCourseRef}</p>
        <p>Comment: {commentRef}</p>
        <Popup
          trigger={<button onClick={() => this.props.editEntry(this.props.index)}>Edit</button>}
          position="right top">
          <EditCourseForm 
            key={this.props.key}
            index={this.props.index}
            entry={this.props.entry}
            entries={this.props.entries}
            editEntry={this.props.editEntry}
          />
        </Popup>
        <button onClick={() => this.props.deleteEntry(this.props.index)}>Delete</button>
      </li>
    )
  }
}

export default TransferCourse;
