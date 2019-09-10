import React, { useEffect, Fragment } from 'react';
import Search from './components/layout/Search'
import Tasks from './components/tasks/Tasks'
import AddBtn from './components/layout/AddBtn'
import AddTaskModal from './components/tasks/AddTaskModal'
import EditTaskModal from './components/tasks/EditTaskModal'
import AddAgentModal from './components/agents/AddAgentModal'
import AgentListModal from './components/agents/AgentListModal'
import { Provider } from 'react-redux'
import store from './store'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';

const App = () => {

  // initialize materialize js
  useEffect(() => {
    M.AutoInit()
  })
  return (
    <Provider store={store}>
      <Fragment>
        <Search />
        <div className='container'>
          <AddBtn />
          <AddTaskModal />
          <EditTaskModal />
          <AddAgentModal />
          <AgentListModal />
          <Tasks />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
