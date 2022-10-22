const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
require("./encounter");

const patientSchema = new Schema({
    nombre: String,
    cedula: String,
    encDetails: [{ type: Schema.Types.ObjectId, ref: 'Encounters' }]
});

module.exports = mongoose.model('Patient', patientSchema);