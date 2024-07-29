const { ref } = require('joi')
const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect('mongodb+srv://s60889355:OJYdjgGyB4lfHPPY@cluster0.dmltcal.mongodb.net',{
    dbName:'relationship'
}) 
}


const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    }]
})

const User = mongoose.model("User",userSchema)

const postSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    content:String,
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const Post = mongoose.model("Post",postSchema) 


module.exports = {
    User,Post,connectDB
}