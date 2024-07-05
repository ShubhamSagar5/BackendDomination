const express = require('express')

const app = express() 

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.send("Backend Working")
})

app.get("/temp",function(req,res){
    res.render("index")
})

app.listen(3000,(req,res)=>{
    console.log('Server is running on port 3000')
})