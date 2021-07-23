import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showPatientDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Patient: {}
    };
  }

  componentDidMount() {
    console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/patient/'+this.props.match.params.id)
      .then(res => {
        console.log("Print-showPatientDetails-API-response: " + res.data);
        this.setState({
          patient: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowPatientDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8082/api/Patient/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowPatientDetails_deleteClick");
      })
  };


  render() {

    const Patient = this.state.Patient;
    let PatientItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Name</td>
            <td>{ Patient.Name }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Address</td>
            <td>{ Patient.Address }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Telephone</td>
            <td>{ Patient.Telephone }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Blood_group</td>
            <td>{ Patient.Blood_group }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>First Date</td>
            <td>{ Patient.First_date }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Description</td>
            <td>{ Patient.description }</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Gender</td>
            <td>{ Patient.Gender }</td>
            </tr>
            <tr>
            <th scope="row">8</th>
            <td>Age</td>
            <td>{ Patient.Age }</td>
            </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowPatientDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Patient List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Patient's Record</h1>
              <p className="lead text-center">
                  View Patient's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { PatientItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,Patient._id)}>Delete Patient</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-patient/${Patient._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Patient
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Book</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}

        </div>
      </div>
    );
  }
}

export default showPatientDetails;
