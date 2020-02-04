
import React from "react";
import Cat from './CatEntry.js';

class EntryContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3>{this.props.title}</h3>
        <button onClick={this.props.loadSampleEntries}>Load Sample Cats</button>
        <ul className="entry-list">
          {Object.keys(this.props.entries).map(key => (
            <Cat
              key={key}
              index={key}
              entry={this.props.entries[key]}
              entries={this.props.entries}
              editEntry={this.props.editEntry}
              deleteEntry={this.props.deleteEntry}
            />
          )).reverse()}
        </ul>
      </React.Fragment>
    )
  }
}

export default EntryContainer;
