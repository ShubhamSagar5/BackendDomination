const express = require('express')
const { User, connectDB, Post } = require('./models/user')

const app = express() 


app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.post("/create/user",async(req,res)=>{

    const {name,email,password} = req.body

    const user = await User.create({
        name,email,password
    })
    res.send(user)

})


app.post("/create/post",async(req,res)=>{
    console.log(req.query)
    const user = await User.findOne({name:req.query.name})

    const createPost  = await Post.create({
        content:"my first blog3",
        user:user._id
    })

    user.posts.push(createPost._id)
    await user.save()

    res.send(createPost)


})

connectDB()

app.listen(3000,()=>{
    console.log('Server is running on Port number 3000')
})