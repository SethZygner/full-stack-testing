//All require calls
const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require("mysql");
const {query} = require("express");
const db = require('./models');
db.sequelize.sync();

require('tutorial.routes');
//Only allows to receive requests from this specific URL
const corsOptions = {
    origin:"http://localhost:3000"
}


//Makes app use the cors
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));





app.listen(5000,  ()=> {
    console.log("Connected on http://localhost:5000");
});
