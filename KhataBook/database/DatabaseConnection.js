const mongoose = require('mongoose')


const dbConnection = async() => {
   try {
     const connect = await mongoose.connect(process.env.MONGODB_URL,{
         dbName:"khataBook"
     })
     console.log('Database Connect Successfully')
   } catch (error) {
    console.log(error.message)
   }
}

module.exports = dbConnection