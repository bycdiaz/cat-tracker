import React from "react";
import Popup from "reactjs-popup";
import Form from './AddCourseForm.js';

class AddCourseForm extends React.Component {
  render() {
    return (
      <Popup trigger={<button closeOnDocumentClick> Add New Transfer Course</button>} position="right center">
        <Form addEntry={this.props.addEntry} />
      </Popup>
    )
  }
}

export default AddCourseForm;
