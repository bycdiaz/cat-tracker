import React from 'react';
import Title from './Title.js';
import EntryContainer from './EntryContainer.js';
import Form from './AddCourseForm.js';
import sampleCourses from '../sampleCourses.js';


class App extends React.Component {
  state = {
    entries: {},
  };

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

  loadSampleEntries = () => {
    this.setState({entries: sampleCourses });
  }

  render(){
    return (
      <React.Fragment>
        <Title title="BIOMED Transfer Courses" />
        <EntryContainer title="Past Courses" loadSampleEntries={this.loadSampleEntries}/>
        <Form addEntry={this.addEntry} />
      </React.Fragment>
    );
  }
}

export default App;
