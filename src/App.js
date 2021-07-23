import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreatePatient from './components/CreatePatient';
import ShowPatientList from './components/ShowPatientList';
import ShowPatientDetails from './components/ShowPatientDetails';
import UpdatePatientInfo from './components/UpdatePatientInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowPatientList} />
          <Route path='/create-patient' component={CreatePatient} />
          <Route path='/edit-patient/:id' component={UpdatePatientInfo} />
          <Route path='/show-patient/:id' component={ShowPatientDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
