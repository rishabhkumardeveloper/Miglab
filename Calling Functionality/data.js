const { response } = require('express')
const express = require('express')

const router = new express.Router()

const port = process.env.PORT || 5000

const worker = require('./model')

require('./mongoose')

router.post('/webhook/', async (req,res) => {
    const content = req.body;
    const phno= parseInt(content.queryResult.parameters["Phone"]);
    const data = {
        name: content.queryResult.parameters["Name"],
        phno: phno,
        skill: content.queryResult.parameters["Skill"].toLowerCase(),
        pincode: content.queryResult.parameters["Pincode"]
    }
    //const work = new worker(req.body)
    const work = new worker(data)
    const value=await work.save()
    response ={
        "fulfillmentText": "Thank You!"
    }
    res.send(response);
})

module.exports = router