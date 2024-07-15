const mongoose = require('mongoose')


const TasksSchema = new mongoose.Schema({
    tasks:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        default:Date.now()
    }  

})


const Tasks = mongoose.model("Taks",TasksSchema) 


module.exports = Tasks