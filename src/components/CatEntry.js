import React from "react";
import Popup from "reactjs-popup";
import EditCatForm from "./EditCatForm.js";

class Cat extends React.Component {
  render() {
    const { 
      nameRef,
      IdRef,
      ageRef,
      sexRef,
      colorRef,
      commentRef,
      dateRef,
      image,
     } = this.props.entry;

    return (
      <li className="cat-entry">
        <img src={image} alt={nameRef} className="cat-image"/>
        <p><span className="field-label">Date Entered:</span> {dateRef}</p>
        <p><span className="field-label">Cat Name:</span> {nameRef}</p>
        <p><span className="field-label">Cat ID Number:</span> {IdRef}</p>
        <p><span className="field-label">Age:</span> {ageRef}</p>
        <p><span className="field-label">Sex:</span> {sexRef}</p>
        <p><span className="field-label">Coat Color:</span> {colorRef}</p>
        <p><span className="field-label">Comment:</span> {commentRef}</p>
        <Popup
          trigger={<button onClick={() => this.props.editEntry(this.props.index)}>Edit</button>}
          position="right top">
          <EditCatForm 
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

export default Cat;
