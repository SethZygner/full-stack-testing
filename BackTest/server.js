
//All require calls
const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require("mysql");
const {query} = require("express");

//Create connection to MySQL
const mySQL = mysql.createConnection({
    host: "mixfix.ca9nhsngguf6.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "PeterGriffin1"
});

//Only allows to receive requests from this specific URL
const corsOptions = {
    origin:"http://localhost:3000"
}

//Makes app use the cors
app.use(cors(corsOptions));


//This gets all the names from the 'test' table in database 'DB' and puts them into an array in which the response
//returns it
app.get('/', (req, res)=>{
    //Uses the 'DB' Database
        mySQL.query('USE DB;');

        //Selects all cells from SQL
        mySQL.query('SELECT * FROM test;', (err, result)=>{
            //Checks for errors
            if (err) throw err;

            //Makes a new array
            let arr = [];

            //Fills in names from the result of the SQL code above
            for(let i = 0; i < result.length; i++){
                arr[i] = result[i].Name;
            }

                //Response of the array for the front end to use
                res.send(arr);
        });
})



app.post('/add', (req, res)=>{

    //mySQL.query('INSERT INTO test SET ?', [data]);

})





app.listen(5000, function () {
    console.log("Connected on http://localhost:5000");
});
