const express = require('express')

const app = express() 

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.send("Backend Working")
})

// app.get("/temp",function(req,res){
//     res.render("index")
// })

app.get("/getForm",(req,res)=>{
    res.render('form')
})

app.get("/check",(req,res)=>{
    res.send("All Things are Good")
    console.log(req.query)
})


app.listen(3000,(req,res)=>{
    console.log('Server is running on port 3000')
})