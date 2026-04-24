const express = require("express")
const fs = require("fs")
const server  = express()
const data = fs.readFileSync("./data.json","utf-8")
server.use("/gro",(req,res)=>{
    try{
        res.send(JSON.parse(data))
        console.log("success")
    }
    catch (err){
        console.log(err)
        res.send("something went wrong, contact owner ‼️🥷")
    }
})

server.listen(3000,()=>console.log("server is started"))