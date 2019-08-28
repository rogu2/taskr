import React, { useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import Search from './components/layout/Search'
import './App.css';

const App =() => {

  // initialize materialize js
  useEffect(() => {
    M.AutoInit()
  })
  return (
    <Fragment>
      <Search />
    </Fragment>
  );
}

export default App;
