const Tasks = require("../models/TasksModels")



const getAllTasks = async(req,res) => {
    try {
        
    
        const tasks = await Tasks.find()
    
        if(!tasks){
            return res.status(404).json({
                success:false,
                message:"Tasks Not Found"
            })
        }
    
        return res.status(200).json({
            success:true,
            message:"All Tasks Get Successfully",
            data:tasks
        })
    
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Internal Server Error " + error.message
        })
    }
    }


const getSingleTasks = async(req,res) => {
    try {
        const {id} = req.params
    
     
        const tasks = await Tasks.findById(id)
    
        if(!tasks){
            return res.status(404).json({
                success:false,
                message:"Tasks Not Found"
            })
        }
    
        return res.status(200).json({
            success:true,
            message:"Tasks Get Successfully",
            data:tasks
        })
    
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Internal Server Error " + error.message
        })
    }
    }



// const getTasks = async(req,res) => {
// try {
//     const {date} = req.body

//     const formatDate = new Date(date)
//     const tasks = await Tasks.findOne({createdAt : formatDate})

//     if(!tasks){
//         return res.status(404).json({
//             success:false,
//             message:"Tasks Not Found"
//         })
//     }

//     return res.status(200).json({
//         success:true,
//         message:"Get Entry Successfully",
//         data:tasks
//     })

// } catch (error) {
//     return res.status(500).json({
//         success:false,
//         message:"Internal Server Error " + error.message
//     })
// }
// }

const createTasks = async(req,res) => {
    try {
        const {task} = req.body

        const data = await Tasks.create({tasks:task})

        if(!data){
            return res.status(404).json({
                success:false,
                message:"Tasks Not Created"
            })
        }

        return res.status(200).json({
            success:true,
            message:"Tasks Saved Successfully"
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Internal Server Error " + error.message
        })
    }
}

const updateTasks = async(req,res) => {
try {
    const {id} = req.params 
    const {task} = req.body
    const tasks = await Tasks.findByIdAndUpdate(id,{tasks:task})

    if(!tasks){
        return res.status(404).json({
            success:false,
            message:"Tasks Not Found"
        })
    }

    return res.status(200).json({
        success:true,
        message:"Tasks Update Successfully"
    })

} catch (error) {
    return res.status(500).json({
        success:false,
        message:"Internal Server Error " + error.message
    })
}
}

const deleteTasks = async(req,res) => {
    try {
        const {id} = req.params 

        const task = await Tasks.findByIdAndDelete(id)

        if(!task){
            return res.status(404).json({
                success:false,
                message:"Tasks Not Deleted"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Tasks Delete Successfully"
        })
    
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Internal Server Error " + error.message
        })
    }
}

module.exports = {
    getAllTasks,
    getSingleTasks,
    createTasks,
    updateTasks,
    deleteTasks
}