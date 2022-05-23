const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require("mysql");
const {query} = require("express");

const config = {
    host: "mixfix.ca9nhsngguf6.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "PeterGriffin1"
}

const corsOptions = {
    origin:"http://localhost:3000"
}

const mySQL = mysql.createConnection(config);

app.use(cors(corsOptions));



app.get('/', (req, res)=>{
        mySQL.query('USE DB;');
        mySQL.query('SELECT * FROM test;', (err, result)=>{
            if (err) throw err;
            let arr = [];
            for(let i = 0; i < result.length; i++){
                arr[i] = result[i].Name;
            }
                res.send(arr);
        });
})



app.post('/add', (req, res)=>{

    //mySQL.query('INSERT INTO test SET ?', [data]);

})





app.listen(5000, function () {
    console.log("Connected on http://localhost:5000");
});
