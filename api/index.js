const express = require("express")
const fs = require("fs")
const path = require("path")

const app  = express()
app.use(express.static(path.join(process.cwd(),"public")))
app.get("/",(req,res)=>{
    try{
      
        res.sendFile(path.join(process.cwd(),"public/index.html"))   // ✅ better than res.send
        console.log("success")
    }
    catch (err){
        console.log(err)
        res.send("something went wrong, contact owner ‼️🥷\n🅾 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 : harjeet_vx")
    }
})
app.get("/data",(req,res)=>{
    try{
     
        res.send(JSON.parse(path.join(process.cwd(), "data.json")))   // ✅ better than res.send
        console.log("success")
    }
    catch (err){
        console.log(err)
        res.send("something went wrong, contact owner ‼️🥷\n🅾 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 : harjeet_vx")
    }
})

module.exports = app