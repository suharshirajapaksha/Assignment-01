import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const PatientCard = (props) => {
    const  patient  = props.patient;

    return(
        <div className="card-container">
            
            <div className="desc">
                <h2>
                    <Link to={`/show-Patient/${patient._id}`}>
                        { patient.Name }
                    </Link>
                </h2>
                <h3>{patient.Name}</h3>
                <h3>{patient.Patient_Id}</h3>
                <p>{patient.description}</p>
            </div>
        </div>
    )
};

export default PatientCard;