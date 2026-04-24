const express = require("express")
const fs = require("fs")
const path = require("path")

const app  = express()
app.use("/",(req,res)=>{
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