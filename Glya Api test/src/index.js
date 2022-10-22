const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();

const app = express();
const port = 3000


mongoose.connect(process.env.MONGO_URI)
        .then(() => {console.log("Conectado a mongo db")})
        .catch((error) => {console.error(error)});

app.listen(port, () => console.log("Hola en port: ", port));