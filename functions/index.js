const express = require('express')
const app = express()
require('./connection/mongoose')
const port = process.env.PORT || 3000
const dataRoute = require('./routes/data')
const bodyParser = require("body-parser")
const path = require('path')
require('dotenv').config()

const functions = require('firebase-functions')

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json())
app.use(bodyParser.json());
app.use(dataRoute)

app.use(express.static("functions"));
  
app.get("/signup", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/build/signup1.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/Login/login.html"));
});

app.get("/approval", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/approval/approval.html"));
});

app.get("/dashboard", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/dashboard/Dashboard.html"));
});

app.get("/request", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/request/Request.html"));
});

app.get("/pending", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/pending/pending.html"));
});

app.get("", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/landing/index.html"));
});

exports.app = functions.https.onRequest(app)

// app.listen(port, () => {
//     console.log('Server is up on port ' + port)
// })
