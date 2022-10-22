const express = require("express");
const encSchema = require("../models/encounter");

const router = express.Router();

router.get('/encs', async(req, res) => {

    try {
        const encounters = await encSchema.find();
        console.log(encounters);

        res.send(encs);
        
    } catch (error) {
        console.error(error);
    }

});

module.exports = router;