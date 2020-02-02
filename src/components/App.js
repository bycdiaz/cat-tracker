import React from 'react';
import Title from './Title.js';
import EntryContainer from './EntryContainer.js';
import AddCourseForm from './AddCourseForm.js';
import sampleCourses from '../sampleCourses.js';
import base from '../base.js';

class App extends React.Component {
  state = {
    entries: {},
  };

  componentDidMount() {
    this.ref = base.syncState('/', {
      context: this,
      state: 'entries',
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addEntry = (entry) => {
    // copy state
    const entries = { ...this.state.entries };
    // add new entry to entries object
    entries[`entry${Date.now()}`] = entry
    // set new entries object to state
    this.setState({
      entries: entries,
    })
  };

  editEntry = (key,updatedEntry) => {
    const entries = {...this.state.entries};
    entries[key] = updatedEntry;
    this.setState({entries});
  }

  deleteEntry = (key) => {
    const entries = { ...this.state.entries };
    entries[key] = null;
    this.setState({entries});
  }

  loadSampleEntries = () => {
    this.setState({entries: sampleCourses });
  }

  render(){
    return (
      <React.Fragment>
        <Title title="BIOMED Transfer Courses" />
        <AddCourseForm addEntry={this.addEntry} formOpen={this.state.formOpen} />
        <EntryContainer
          title="Past Courses"
          loadSampleEntries={this.loadSampleEntries}
          editEntry={this.editEntry}
          deleteEntry={this.deleteEntry}
          entries={this.state.entries}
        />
      </React.Fragment>
    );
  }
}

export default App;
