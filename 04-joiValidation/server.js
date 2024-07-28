const express  = require('express')
const { connectDB, User, validateData } = require('./models/userSchema')

const app = express() 

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/",function (req,res){
    res.send("Backend Working Fine")
})


app.post("/postData",async function (req,res) {
   
    const {firstName,lastName,email, phoneNumber} = req.body
 
    const response = validateData(req.body)
    if (response.error) {
        console.log(response.error.details[0].message); // Log the first validation error message
        return res.status(400).json({ // Consider using status 400 for bad request instead of 500
            success: false,
            message: response.error.details[0].message // Send the first validation error message in the response
        });
    }
    await User.create({
        firstName,
        lastName,
        email,
        phoneNumber
    })

    return res.status(200).json({
        success:true,
        message:'user created successfully'
    })
})

connectDB()


app.listen(3000,function(){
    console.log("Server is running on port number 3000")
})