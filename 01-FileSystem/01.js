const fs = require('fs')


// ------------------------------------------Create File-------------------

// fs.writeFile("abc.txt","This is First Line",function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("file created successfully")
//     }
// })

// ------------------------------------------Read Data-------------------


// fs.readFile('./abc.txt','utf-8',function (err,data){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })


// ------------------------------------------Add Data-------------------


// fs.appendFile("./abc.txt","This is second line",function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Done")
//     }
// })


// ------------------------------------------Rename-------------------

// fs.rename("./xyz.txt","abc.txt",function(err){
//     if(err){
//         console.log(err)
//     }
// })


// ------------------------------------------DELETE-------------------
// fs.unlink("./abc.txt",function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("File deleted successfully")
//     }
// })


// -----------------------------------Creating Folder----------------------
// fs.mkdir("lolo",function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Folder created")
//     }
// })

// -----------------------------------Reading Folder----------------------
// fs.readdir("./lolo/llo",{withFileTypes:true},function(err,files){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(files)
//     }
// })

// ----------------------------------Deleting Folder----------------------
// fs.rmdir("./lolo/llo",{recursive:true},function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Delete Folder ")
//     }
// })
