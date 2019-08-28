import React, { useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import Search from './components/layout/Search'
import Tasks from './components/tasks/Tasks'
import './App.css';

const App =() => {

  // initialize materialize js
  useEffect(() => {
    M.AutoInit()
  })
  return (
    <Fragment>
      <Search />
      <div className="container">
        <Tasks />
      </div>
    </Fragment>
  );
}

export default App;
