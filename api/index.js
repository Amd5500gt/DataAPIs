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
     
const filePath = path.join(process.cwd(), "data.json")
    const data = fs.readFileSync(filePath, "utf-8")
    res.json(JSON.parse(data))
        console.log("success")
    }
    catch (err){
        console.log(err)
        res.send("something went wrong, contact owner ‼️🥷\n🅾 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 : harjeet_vx")
    }
})

module.exports = app