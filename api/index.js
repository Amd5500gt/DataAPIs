const express = require("express")
const fs = require("fs")
const app  = express()
app.use("/",(req,res)=>{
    try{
        const data = fs.readFileSync("./data.json","utf-8")
        res.send(JSON.parse(data))
        console.log("success")
    }
    catch (err){
        console.log(err)
        res.send("something went wrong, contact owner ‼️🥷")
    }
})

module.exports = app