const express = require('express');
const router = express.Router();

// Load patient model
const patient = require('../../models/patient');

// @route GET api/patient/test
// @description tests patient route
// @access Public
router.get('/test', (req, res) => res.send('patient route testing!'));

// @route GET api/patient
// @description Get all patient
// @access Public
router.get('/', (req, res) => {
  Patient.find()
    .then(patient => res.json(patient))
    .catch(err => res.status(404).json({ nopatientfound: 'No Patient found' }));
});

// @route GET api/patient/:id
// @description Get single patient by id
// @access Public
router.get('/:id',(req, res) => {
  Patient.findById(req.params.id)
    .then(patient => res.json(patient))
    .catch(err => res.status(404).json({ nopatientfound: 'No Patient found' }));
});

// @route GET api/patient
// @description add/save patient
// @access Public
router.post('/', (req, res) => {
  Patient.create(req.body)
    .then(patient => res.json({ msg: 'Patient added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this patient' }));
});

// @route GET api/patient/:id
// @description Update patient
// @access Public
router.put('/:id', (req, res) => {
  Patient.findByIdAndUpdate(req.params.id, req.body)
    .then(patient => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/patient/:id
// @description Delete patient by id
// @access Public
router.delete('/:id', (req, res) => {
  Patient.findByIdAndRemove(req.params.id, req.body)
    .then(patient=> res.json({ mgs: 'patient entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a patient' }));
});

module.exports = router;