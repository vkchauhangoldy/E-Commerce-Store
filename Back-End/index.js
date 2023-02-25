const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const env = require("dotenv").config()
mongoose.set('strictQuery', false)




const app = express();

app.use(express.json())
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());



const CONNECTION_URL = 'mongodb://localhost:27017';
const PORT = process.env.PORT || 5050;

app.listen(PORT, () => console.log(`Server running on port :${PORT}`))
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected Succesfully'))
    .catch((error) => console.log(error.message));