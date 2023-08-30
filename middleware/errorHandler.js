const errorHandler = (err,req,res)=>{
    return res.status(500).json({msg:err})
}

module.exports = errorHandler