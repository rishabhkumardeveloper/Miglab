const express = require('express')
const { findOne } = require('../models/company')
const router = new express.Router()
const port = process.env.PORT || 3000
const company = require('../models/company')
const worker = require('../models/worker')
const recruitment = require('../models/recruitment')
require('../connection/mongoose')

router.post('/company', async (req,res) => {
    const comp = new company(req.body)
    try {
        const value = await comp.save()
        res.status(201).send(value)
    } catch (e) {
        res.status(400).send()
    }
})

router.post('/companyinfo', async (req,res) => {
    try{
        const info = req.body
        let comp = await company.findOne({regno: info.regno});
        console.log(comp)
        res.send(comp)
    }
    catch(e){
        res.status(500).send()
    }
})

router.post('/companylogin', async (req,res) => {
    try{
        const info = req.body
        console.log(info)
        let comp = await company.findOne({regno: info.regno,password: info.password})
        console.log(comp)
        if(!comp){
            res.send({exist: 0})
        } 
        else {
            res.send({regno: info.regno,exist: 1})
        }
    }
    catch(e){
        res.status(500).send()
    }
})

router.post('/worker', async (req,res) => {
    const work = new worker(req.body)
    try {
        const value = await work.save()
        res.status(201).send(value)
    } catch (e) {
        res.send(400).send()
    }
})

router.post('/recruitment', async (req,res) => {
    const info = req.body
    try{
        let comp = await recruitment.findOne({regno: info.regno})
        if(!comp){
            const recruit = new recruitment(info)
            const value = await recruit.save()
            res.send({update: "New"})
        } 
        else {
            let flag = await recruitment.findOneAndUpdate({regno: info.regno},{sewing: info.sewing, welding: info.welding, carpentry: info.carpentry, painter: info.painter, mason: info.mason});
            res.send({update: "Updated"})
        }
    }
    catch(e){

    }
})

router.post('/pendingrequest', async (req,res) => {
    const info = req.body
    try{
        let comp = await recruitment.findOne({regno: info.regno})
        if(comp){
            res.send(comp)
        }
    }
    catch(e){
    }
})

router.post('/workerrequest', async (req,res) => {
    try{
        const info = req.body
        //console.log(info)
        let comp = await company.findOne({regno: info.regno})
        let recruit = await recruitment.findOne({regno: info.regno})
        const workers = await worker.find({})
        const data = {
            sewing: [],
            welding: [],
            carpentry: [],
            painter: [],
            mason: []
        }
        if(recruit.sewing!=0){
            for(const work of workers) {
                if(comp.pincode == work.pincode && work.skill=="sewing" && work.available == 0)
                {
                    data.sewing.push(work)
                }
                //console.log(work)
            }
        }
        if(recruit.welding!=0){
            for(const work of workers) {
                if(comp.pincode == work.pincode && work.skill=="welding" && work.available == 0)
                {
                    data.welding.push(work)
                }
                //console.log(work)
            }
        }
        if(recruit.carpentry!=0){
            for(const work of workers) {
                if(comp.pincode == work.pincode && work.skill=="carpentry" && work.available == 0)
                {
                    data.carpentry.push(work)
                }
                //console.log(work)
            }
        }
        if(recruit.painter!=0){
            for(const work of workers) {
                if(comp.pincode == work.pincode && work.skill=="painter" && work.available == 0)
                {
                    data.painter.push(work)
                }
                //console.log(work)
            }
        }
        if(recruit.mason!=0){
            for(const work of workers) {
                if(comp.pincode == work.pincode && work.skill=="mason" && work.available == 0)
                {
                    data.mason.push(work)
                }
                //console.log(work)
            }
        }
        console.log(data)
        res.status(200).send(data)
    }
    catch(e){
        res.status(500).send()
    }
})

router.post('/workeraccept', async (req,res) => {
    try{
        const info = req.body
        for(const phno of info.phno)
        {
            console.log(phno.no)
            let flag = await worker.findOneAndUpdate({phno: phno.no},{available: 1});
            let recruit = await recruitment.find(({regno: info.regno}))
            console.log(flag)
            console.log(recruit)
            if(flag.skill == "sewing")
            {
                const cal = recruit[0].sewing-1
                console.log(cal)
                let done = await recruitment.findOneAndUpdate({regno: info.regno},{sewing: recruit[0].sewing-1})
            }
            if(flag.skill == "welding")
            {
                let done = await recruitment.findOneAndUpdate({regno: info.regno},{sewing: recruit[0].welding-1})
            }
            if(flag.skill == "carpentry")
            {
                let done = await recruitment.findOneAndUpdate({regno: info.regno},{sewing: recruit[0].carpentry-1})
            }
            if(flag.skill == "painter")
            {
                let done = await recruitment.findOneAndUpdate({regno: info.regno},{sewing: recruit[0].painter-1})
            }
            if(flag.skill == "mason")
            {
                let done = await recruitment.findOneAndUpdate({regno: info.regno},{sewing: recruit[0].mason-1})
            }
        }
        res.send({update: 1})
    }
    catch (e){
        res.status(500).send(e)
    }
})

module.exports = router
