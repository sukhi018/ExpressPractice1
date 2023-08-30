const express = require('express')
const router = express.Router()
const {getAllTasks,getTask,addTask,deleteTask,updateTask} = require('../controllers/tasks')



router.get('/',getAllTasks)
router.get('/:id',getTask)
router.post('/',addTask)
router.patch('/:id',updateTask)
router.delete('/:id',deleteTask)

module.exports = router