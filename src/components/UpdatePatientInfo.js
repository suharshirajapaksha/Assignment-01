import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdatePatientInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Address: '',
      Telephone: '',
      description: '',
      Age:''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/Patient/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, patient: res.data})
        this.setState({
          Name: res.data.Name,
          Address: res.data.Address,
          Telephone: res.data.Telephone,
          description: res.data.description,
          First_date: res.data.First_date,
          Age: res.data.Age
        })
      })
      .catch(err => {
        console.log("Error from UpdatePatientInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      Name: this.state.Name,
      Address: this.state.Address,
      Telephone: this.state.Telephone,
      description: this.state.description,
      Age: this.state.Age
    };

    axios
      .put('http://localhost:8082/api/patient/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-Patient/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdatePatientInfo!");
      })
  };


  render() {
    return (
      <div className="UpdatePatientInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Patient List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Patient</h1>
              <p className="lead text-center">
                  Update Patient's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="Name">Name</label>
              <input
                type='text'
                placeholder='Name of the Patient'
                name='Name'
                className='form-control'
                value={this.state.Name}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="Address">Address</label>
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
            <label htmlFor="Telephone">Telephone</label>
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
            <label htmlFor="description">Description</label>
              <input
                type='text'
                placeholder='Describe this description'
                name='description'
                className='form-control'
                value={this.state.description}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="Age">Age</label>
              <input
                type='text'
                placeholder='Age'
                name='Age'
                className='form-control'
                value={this.state.Age}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update patient</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdatePatientInfo;
