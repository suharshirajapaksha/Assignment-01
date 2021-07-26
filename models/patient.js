const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  PatientID:{
    type:Number,
    required: true,
    unique: true
    
  },
  Name: {
    type: String,
    required: true
  },
  Address: {
    type: String,
    required: true
  },
  Telephone: {
    type: Number,
    required: true
  },
  description: {
    type: String
  },
  First_date: {
    type: Date
  },
  Blood_group: {
    type: String
  },
  
  Gender:{
    type:String
  },
  Age:{
    type:Number,
  }
});
module.exports = Patient = mongoose.model('patient', PatientSchema);

