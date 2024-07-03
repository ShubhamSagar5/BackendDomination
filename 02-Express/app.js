const express = require('express')

const app = express() 


const expressSession = require('express-session')
const flash = require('connect-flash')


// Middleware
// 1)---------------------------------Express-Session-----------------
// app.use(expressSession({
//     secret:"random secret",
//     resave:false,
//     saveUninitialized:false
// }))

// app.get("/",(req,res)=>{
//     res.send("Hello Backend")
// })


 
// app.get("/create",function(req,res,next){
//     req.session.polo ="true"
//     res.send("Done")
// })

// app.get("/check",(req,res)=>{
//   console.log(req.session.polo)   
  
//})


app.use(expressSession({
    secret:"abc",
    resave:false,
    saveUninitialized:false
}))

app.use(flash())

app.get('/',function(req,res,next){
    req.flash("error","Invalid Crededntials")
    res.redirect('/error')
})

app.get('/error',function(req,res,next){
    const messg = req.flash('error')
    res.send(messg)
})


app.listen(3000,()=>{
    console.log("Server is Running on Port 3000")
})