const express = require('express')
const dotenv = require('dotenv')
const dbConnection = require('../database/DatabaseConnection')
const cors = require('cors')
const TasksRoutes = require("../routes/TasksRoutes")
const app = express() 

dotenv.config({
    path:"./config/config.env"
})


app.use("/api/v1/entry",TasksRoutes)


app.get("/",(req,res)=>{
    res.send("Backend Running")
})

app.use((err,req,res,next)=>{
    res.send("Something Went Wrong "+err.message )
})

dbConnection() 



app.listen(process.env.PORT,()=>{
    console.log('Server is Listing on Port No '+process.env.PORT)
})


