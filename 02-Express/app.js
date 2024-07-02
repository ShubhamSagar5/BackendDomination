const express = require('express')

const app = express() 


const expressSession = require('express-session')



// Middleware
app.use(expressSession({
    secret:"random secret",
    resave:false,
    saveUninitialized:false
}))

app.get("/",(req,res)=>{
    res.send("Hello Backend")
})


 
app.get("/create",function(req,res,next){
    req.session.polo ="true"
    res.send("Done")
})

app.get("/check",(req,res)=>{
  console.log(req.session.polo)   
  
})

app.listen(3000,()=>{
    console.log("Server is Running on Port 3000")
})