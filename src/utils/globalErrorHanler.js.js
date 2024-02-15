const globalErrorHanler = (error,res,req,next)=>{
        res.status(error.status || 500).json({
            message:error.message,
            error: error.errors
        })


}

module.exports = globalErrorHanler;