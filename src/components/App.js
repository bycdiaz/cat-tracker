import React from 'react';
import Title from './Title.js';
import EnteredCourses from './EnteredCourses.js';

function App() {
  return (
    <React.Fragment>
      <Title title="BIOMED Transfer Courses" />
      <EnteredCourses title="Past Courses"/>
    </React.Fragment>
  );
}

export default App;
