import React from "react";
import TransferCourse from './TransferCourse.js';

class EntryContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3>{this.props.title}</h3>
        <TransferCourse />
        <TransferCourse />
        <TransferCourse />
      </React.Fragment>
    )
  }
}

export default EntryContainer;
