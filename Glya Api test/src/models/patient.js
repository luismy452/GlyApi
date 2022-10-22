const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    nombre: String,
    cedula: String,
});

module.exports = mongoose.model('Patient', patientSchema);