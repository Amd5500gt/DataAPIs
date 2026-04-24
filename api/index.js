const express = require("express")
const fs = require("fs")
const path = require("path")

const app  = express()
const landingPage = express.static(path.join(process.cwd(),"public/index.html"))

app.get("/",(req,res)=>{
    try{
 
        res.json(landingPage)   // ✅ better than res.send
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

        res.json(JSON.parse(data))   // ✅ better than res.send
        console.log("success")
    }
    catch (err){
        console.log(err)
        res.send("something went wrong, contact owner ‼️🥷\n🅾 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 : harjeet_vx")
    }
})

module.exports = app