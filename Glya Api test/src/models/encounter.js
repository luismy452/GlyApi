const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const encSchema = new Schema({
    fecha: String,
    vacuna: String,
    dosis: Number,
    patient_id: String,
});

module.exports = mongoose.model('Encounter', encSchema);