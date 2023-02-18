// To enable ES6 "import" feature in Node.js, Only add "type": "module" in package.json file
// import express from 'express'
// import {randomUUID} from 'crypto'
// import cors from 'cors'

const express = require('express')
const crypto = require('crypto')
var cors = require('cors')

const app = express()

const comments = []
app.use(express.json())
app.use(cors())

app.post('/addcomment',(req,res)=>{
    const newComment = {
        // id:randomUUID(),
        id:crypto.randomUUID(),
        name:req.body.text   
     }
    comments.push(newComment)
    res.json(newComment)
})

app.listen(5000,()=>{
    console.log('api is runnnig')
})