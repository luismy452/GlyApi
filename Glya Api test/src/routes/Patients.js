const express = require("express");
const patientSchema = require("../models/patient");

const router = express.Router();

router.get('/patients', async(req, res) => {

    try {
        const patients = await patientSchema.find();
        console.log(patients);

        res.send(patients);
        
    } catch (error) {
        console.error(error);
    }

});

module.exports = router;