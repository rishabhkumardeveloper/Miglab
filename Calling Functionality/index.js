// Load Node Packages
const csp = require('express-csp-header');
express = require('express');
body_parser = require('body-parser');
request = require('request');
csv = require('csv-writer');
fs = require('fs');
app = express();

port = process.env.PORT || 5000
app.use(body_parser.urlencoded({
    extended: false
}));

// Process application/json
app.use(body_parser.json());


app.post('/webhook/', function (req, res) {
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
});


// Listen Requests
app.listen(port, function () {
    console.log('webhook is running on port', port)
})