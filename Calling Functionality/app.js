// Load Node Packages
const express = require('express')
const app = express()
require('./mongoose')
const dataRoute = require('./data')
const body_parser = require("body-parser")
require('dotenv').config()
app.use(express.json())
app.use(body_parser.json());
app.use(dataRoute)
const csp = require('express-csp-header');
const request = require('request');
const csv = require('csv-writer');
const fs = require('fs');

port = process.env.PORT || 5000 
app.use(body_parser.urlencoded({
  extended: false
}));
// Process application/json
app.use(body_parser.json());

/*app.post('/webhook/', function (req, res) {
    content = req.body;
    console.log(content);
    createCsvWriter = require('csv-writer').createObjectCsvWriter;
    csv_writer = createCsvWriter({
      path: 'users-info.csv',
      header: [
        {id: 'Name', title: 'Name'},
        {id: 'Phone', title: 'Phone'},
        {id: 'Skill', title: 'Skill'},
        {id: 'Pincode', title: 'Pincode'},
      ],
      append : true
    });

    data = [
      {
        Name: content.queryResult.parameters["Name"],
        Phone: content.queryResult.parameters["Phone"],
        Skill: content.queryResult.parameters["Skill"],
        Pincode: content.queryResult.parameters["Pincode"]
      }
    ];

    csv_writer
      .writeRecords(data)
      .then(()=> console.log('The CSV file was written successfully')); 

    response =  {
      "fulfillmentText": "Thank You! We have received your query."
    }
  
    res.send(response);
}); */


// Listen Requests
app.listen(port, function () {
    console.log('webhook is running on port', port)
})