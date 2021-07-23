import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreatePatient extends Component {
  constructor() {
    super();
    this.state = {
      PatientId:'',
      Name: '',
      Address:'',
      Telephone:'',
      description:'',
      First_date:'',
      Blood_group:'',
      Gender:'',
      Age:'',
      

    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      PatientId:this.state.PatientId,
      Name: this.state.Name,
      Address: this.state.Address,
      Telephone: this.state.Telephone,
      description: this.state.description,
      First_date: this.state.First_date,
      Blood_group:this.state.Blood_group,
      Gender:this.state.Gender,
      Age:this.state.Age
      
    };

    axios
      .post('http://localhost:8082/api/patient', data)
      .then(res => {
        this.setState({
          PatientId:'',
          Name: '',
          Address:'',
          Telephone:'',
          description:'',
          First_date:'',
          Blood_group:'',
          Gender:'',
          Age:'',
         
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreatePatient!");
      })
  };

  render() {
    return (
      <div className="CreatePatient">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Patient List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Patient</h1>
              <p className="lead text-center">
                  Create new patient
              </p>

              <form noValidate onSubmit={this.onSubmit}>
              <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Patient Id'
                    name='PatientId'
                    className='form-control'
                    value={this.state.PatientId}
                    onChange={this.onChange}
                  />
                </div>
                
                <br />
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Name of Patient'
                    name='Name'
                    className='form-control'
                    value={this.state.Name}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Address'
                    name='Address'
                    className='form-control'
                    value={this.state.Address}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Telephone'
                    name='Telephone'
                    className='form-control'
                    value={this.state.Telephone}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Describe this patient'
                    name='description'
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='date'
                    placeholder='First_date'
                    name='First_date'
                    className='form-control'
                    value={this.state.First_date}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Blood_group'
                    name='Blood_group'
                    className='form-control'
                    value={this.state.Blood_group}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Gender'
                    name='Gender'
                    className='form-control'
                    value={this.state.Gender}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Age'
                    name='Age'
                    className='form-control'
                    value={this.state.Age}
                    onChange={this.onChange}
                  />
                </div>
                

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePatient;