const mongoose = require('mongoose')
const connectDb = (connectStr)=>{
    return mongoose.connect(connectStr,{
        useNewUrlParser: true,
        useCreateIndex:true,
        useFindAndModify:true,
        useUnifiedTopology:true,
    })
}
module.exports = {connectDb}