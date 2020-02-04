import React from "react";
import Popup from "reactjs-popup";

class AddCatForm extends React.Component {
  nameRef = React.createRef();
  IdRef = React.createRef();
  ageRef = React.createRef();
  sexRef = React.createRef();
  colorRef = React.createRef();
  commentRef = React.createRef();
  dateRef = React.createRef();

  createCat = (event, close) => {
    event.preventDefault();
    const entry = {
      nameRef: this.nameRef.current.value,
      IdRef: parseInt(this.IdRef.current.value),
      ageRef: this.ageRef.current.value,
      sexRef: this.sexRef.current.value,
      colorRef: this.colorRef.current.value,
      commentRef: this.commentRef.current.value,
      dateRef: (new Date()).toString(),
    };
    console.log(entry);
    this.props.addEntry(entry);
    event.currentTarget.reset();
    close();
  }

  render() {
    return (
      <Popup trigger={<button> Add New Cat</button>} position="bottom center">
          {close => (
            <form className="form" onSubmit={(e)=>this.createCat(e,close)} autoComplete="off">
              <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
              <input name="stuId" ref={this.IdRef} type="text" placeholder="Cat ID #" />
              <input name="age" ref={this.ageRef} type="text" placeholder="Age" />
              <select name="sex" ref={this.sexRef} type="text" placeholder="Sex">
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
              <input name="color" ref={this.colorRef} type="text" placeholder="color" />
              <textarea name="comment" ref={this.commentRef} placeholder="Comment"></textarea>
              <button type="submit">+ Add Course</button>
            </form>
          )}
      </Popup>
    )
  }
}

export default AddCatForm;
