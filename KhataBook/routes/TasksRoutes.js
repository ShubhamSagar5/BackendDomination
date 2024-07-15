const express = require('express')
const { getAllTasks, getSingleTasks, createTasks, updateTasks, deleteTasks } = require('../controllers/Tasks')

const router = express.Router() 

router.get('/getAll',getAllTasks)
router.get('/getSingle/:id',getSingleTasks)
router.post('/createTasks',createTasks)
router.put('/updateTasks',updateTasks)
router.delete('/deleteTasks/:id',deleteTasks)



module.exports = router