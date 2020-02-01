
import React from "react";
import TransferCourse from './TransferCourse.js';

class EntryContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3>{this.props.title}</h3>
        <button onClick={this.props.loadSampleEntries}>Load Sample Entries</button>
        <ul className="entry-list">
          {Object.keys(this.props.entries).map(key => (
            <TransferCourse
              key={key}
              index={key}
              details={this.props.entries[key]}
              deleteEntry={this.props.deleteEntry}
            />
          ))}
        </ul>
      </React.Fragment>
    )
  }
}

export default EntryContainer;
