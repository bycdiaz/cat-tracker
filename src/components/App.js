import React from 'react';
import Title from './Title.js';
import EntryContainer from './EntryContainer.js';
import Form from './AddCourseForm.js';

function App() {
  return (
    <React.Fragment>
      <Title title="BIOMED Transfer Courses" />
      <EntryContainer title="Past Courses"/>
      <Form />
    </React.Fragment>
  );
}

export default App;
