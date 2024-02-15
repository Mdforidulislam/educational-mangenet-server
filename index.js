const express = require('express');
const connectionDB = require('./src/db/connectDB');
const router = require('./src/router');
const globalErrorHanler = require('./src/utils/globalErrorHanler.js');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();

app.use(router)

app.get('/health',(req,res)=>{
    res.send('Schoole mangment system is runnign...')
    console.log('schoole managment system update');
})


app.all("*",(req,res,next)=>{
    const error = new Error(`con't find the ${req.originalUrl} on the server`)
    error.status = 404;
    next(error);
})


app.use(globalErrorHanler)



const connectDB = async()=>{
    await connectionDB()
    app.listen(port,()=>{
        console.log('management server is running port is ', port);
    })

}


connectDB()


module.exports = app;
