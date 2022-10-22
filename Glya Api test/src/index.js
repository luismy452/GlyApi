const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const patientRoute = require("./routes/Patients");
const encRoute = require("./routes/Encounters");

const app = express();
const port = 3000

// middlewares
app.use(express.json());
app.use('/api', patientRoute);
app.use('/api', encRoute);


mongoose.connect(process.env.MONGO_URI)
        .then(() => {console.log("Conectado a mongo db  backtest_dev")})
        .catch((error) => {console.error(error)});




app.listen(port, () => console.log("Hola en port: ", port));