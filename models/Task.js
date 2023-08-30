const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,'must provide name'],
        trim:true,
        maxlength:[20,'name can not be mroe than 20 chars']
    },
    completed:{
        type:Boolean,
        default:false,
        
    }
})

module.exports = mongoose.model('Task',schema)
