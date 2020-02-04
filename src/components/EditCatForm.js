import React from "react";

class EditCatForm extends React.Component {
  handleChange = (event) => {
    const updatedCourse = {
      ...this.props.entry,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    this.props.editEntry(this.props.index, updatedCourse);
  }

  render() {
    return (
      <div className="cat-edit">
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
            name="IdRef"
            onChange={this.handleChange}
            defaultValue={this.props.entry.IdRef} 
          />
        </p>
        <p>Age:
          <input
            type="text"
            name="ageRef"
            onChange={this.handleChange}
            defaultValue={this.props.entry.ageRef} 
          />
        </p>
        <p>Sex:
          <input
            type="text"
            name="sexRef"
            onChange={this.handleChange}
            defaultValue={this.props.entry.sexRef} 
          />
        </p>
        <p>Color:
          <input
            type="text"
            name="colorRef"
            onChange={this.handleChange}
            defaultValue={this.props.entry.colorRef} 
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

export default EditCatForm;
