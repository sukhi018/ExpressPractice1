const Task = require('../models/Task.js')
// a Mongoose model provides an interface for the database to create, query, update, delete records, and so on.
const asyncWrapper = require('../middleware/async.js')

const getAllTasks = asyncWrapper (async(req,res)=>{
    const tasks  = await Task.find({})
    return res.status(201).json({tasks})
})

const getTask = asyncWrapper(async(req,res)=>{
    const {id} = req.params
    const task  = await Task.findOne({_id:id})
    if (task==null)
    {
        return res.status(404).json({msg:`No task with the mentioned id`})
    }
    return res.status(200).json({task})
})

const addTask = asyncWrapper(async (req,res)=>{
    const task  = await Task.create(req.body)
    return res.status(201).json({task})

})

const deleteTask = asyncWrapper(async(req,res)=>{
    const {id} = req.params
    const task  = await Task.findOneAndDelete({_id:id})
    return res.status(201).json({task})

})

const updateTask = asyncWrapper(async(req,res)=>{
    const{id} = req.params
    const task  = await Task.findOneAndUpdate({_id:id},req.body,{new:true,runValidators:true})
    if (task==null)
    {
        return res.status(404).json({msg:`No task with the mentioned id`})
    }
    return res.status(200).json({task})
})

module.exports = {getAllTasks,getTask,addTask,deleteTask,updateTask}