const express = require('express')
const collection = require('./mongo')
const cors = require('cors')
const { model } = require('mongoose')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())




app.get("/", cors(), (req,res)=>{

})

app.post("/", async(req, res)=>{

    const{email, password} = req.body

    try{

        const check=await collection.findOne({email:email})

        if(check){

            res.json('exits')
        }
        else{

            res.json("Not Exits")
        }

    }catch(e){
            res.json('Not Exits')
    }

})

app.post("/signup", async(req, res)=>{

    const{email, password} = req.body

    const data={
        email:email,
        password:password
    }

    try{

        const check=await collection.findOne({email:email})

        if(check){

            res.json('exits')
        }
        else{

            res.json("Not Exits")
            await collection.insertMany([data])
        }

    }catch(e){
            res.json('Not Exits')
    }

})

app.listen(8000, ()=>{

    console.log("port conncetd")
})

module.exports = app;