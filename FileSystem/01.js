const fs = require('fs')

fs.writeFile("abc.txt","This is First Line",function(err){
    if(err){
        console.log(err)
    }else{
        console.log("file created successfully")
    }
})