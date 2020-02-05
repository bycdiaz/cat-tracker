import React from 'react';
import Title from './Title.js';
import EntryContainer from './EntryContainer.js';
import AddCatForm from './AddCatForm.js';
import sampleCats from '../sampleCats.js';
import base from '../base.js';
import BackgroundImage from './BackgroundImage.js';

class App extends React.Component {
  state = {
    entries: {},
  };

  componentDidMount() {
    this.ref = base.syncState('/app', {
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
    this.setState({entries: sampleCats });
  }

  render(){
    return (
      <React.Fragment>
        <BackgroundImage />
        <Title title="Cat Tracker" />
        <AddCatForm addEntry={this.addEntry} formOpen={this.state.formOpen} />
        <EntryContainer
          title="Current Cats"
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
