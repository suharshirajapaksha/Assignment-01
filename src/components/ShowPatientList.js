import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PatientCard from './PatientCard';

class ShowPatientList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Patient: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/patient')
      .then(res => {
        this.setState({
          patient: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowPatientList');
      })
  };


  render() {
    const Patient = this.state.Patient;
    console.log("PrintPatient: " + Patient);
    let PatientList;

    if(!Patient) {
      PatientList = "there is no patient record!";
    } else {
      PatientList = Patient.map((Patient, k) =>
        <PatientCard Patient={Patient} key={k} />
      );
    }

    return (
      <div className="ShowPatientList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Patients List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-Patient" className="btn btn-outline-warning float-right">
                + Add New Patient
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {PatientList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowPatientList;